<template>
  <form autocomplete="off">
    <ControlComp
      v-for="control in controls"
      :key="control"
      :settings="settings[control]"
      :control="control"
      :errorValue="formData[control].errorValue"
      :errorMessage="formData[control].errorMessage"
      @controlValueChanged="controlValueChanged"
      @controlValueBlured="controlValueBlured"
    />
    <div class="reminder-container">
      <label class="reminder-label" for="reminder-checkbox">Reminde</label>
      <input id="reminder-checkbox" type="checkbox" v-model="remindeValue" />
    </div>
  </form>
  <ButtonComp
    v-if="showSubmit"
    class="btn-submit"
    :primaryColor="true"
    text="submit"
    @btnClick="sendForm"
  />
</template>

<script>
import ControlComp from "./ControlComp";
import validator from "../../helpers/validator";
import resultValidation from "../../helpers/validationResulter";
import ButtonComp from "../components/ButtonComp";
import formatDate from "../../helpers/dateFormator";

export default {
  name: "FormComp",
  props: {
    settings: Object,
    reminder: Boolean,
    mode: String,
  },
  data() {
    return {
      formData: {},
      valResult: [],
      remindeValue: this.reminder,
    };
  },
  computed: {
    controls() {
      return Object.keys(this.settings);
    },
    showSubmit() {
      return this.calculateResults();
    },
  },

  methods: {
    controlValueChanged(payload) {
      this.formData[payload.control].value = payload.value.trim();
    },

    controlValueBlured(control) {
      this.validate(control);
    },

    validate(control) {
      let error = false;

      this.settings[control].valRules.forEach((valRule) => {
        if (!error) {
          const result =
            "par" in valRule
              ? validator[valRule.rule](
                  this.formData[control].value,
                  valRule.par
                )
              : validator[valRule.rule](this.formData[control].value);

          if (!result) {
            resultValidation(this.valResult, control, false);
            this.formData[control].errorValue = true;
            this.formData[control].errorMessage = valRule.message;
            error = true;
          }
        }
      });

      if (!error) {
        resultValidation(this.valResult, control, true);
        this.formData[control].errorValue = false;
        this.formData[control].errorMessage = "";
      }
    },

    calculateResults() {
      const rule = this.valResult.every((result) => {
        return result.value === true;
      });

      if (this.valResult.length === 5 && rule) {
        return true;
      } else {
        return false;
      }
    },

    sendForm(e) {
      e.preventDefault();

      const extractedId = this.$route.params.id;
      const formOutput = this.controls.reduce((acc, cur) => {
        acc[cur] = this.formData[cur].value;
        return acc;
      }, {});

      new Promise((resolve) => {
        if (this.mode === "edit") {
          Object.assign(formOutput, {
            startday: formatDate(formOutput.startday),
            lastday: formatDate(formOutput.lastday),
            reminder: this.remindeValue,
            id: extractedId,
          });

          fetch(`http://localhost:5000/tasks/${extractedId}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(formOutput),
          });
        } else {
          Object.assign(formOutput, {
            startday: formatDate(formOutput.startday),
            lastday: formatDate(formOutput.lastday),
            reminder: this.remindeValue,
            id: Math.floor(Math.random() * 10000) + 1,
          });

          fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(formOutput),
          });
        }
        resolve();
      }).then(() => {
        alert("Your task has been successfully submitted, you will be redirected to the home page");
        this.$router.push("/");
      });
    },
  },

  created() {
    this.controls.forEach((control) => {
      this.formData[control] = {
        value: this.settings[control].initialValue || "",
        errorValue: false,
        errorMessage: "",
      };
    });

    if (this.mode === "edit") {
      this.controls.forEach((control) => {
        this.validate(control);
      });
    }
  },
  components: { ControlComp, ButtonComp },
};
</script>

<style>
.reminder-container {
  display: flex;
  gap: 40px;
  font-size: 18px;
  align-items: center;
}

#reminder-checkbox {
  accent-color: #1e81b0;
  padding: 20px;
  width: 30px;
  height: 30px;
}

.btn-submit {
  margin-top: 30px;
  width: 100%;
}
</style>
