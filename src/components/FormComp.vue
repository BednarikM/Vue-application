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
  </form>
</template>

<script>
import ControlComp from "./ControlComp";
import validator from "../../helpers/validator.js";

export default {
  name: "FormComp",
  props: {
    settings: Object,
    // task:{
    //   label: "..."
    //   initialValue: "..."
    // },
    // lastname: {
    //   label: "..."
    //   initialValue: "..."
    // }
  },
  data() {
    return {
      formData: {},
    };
  },
  computed: {
    controls() {
      return Object.keys(this.settings);
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
  },
  methods: {
    validate(control) {
      // rules this.settings[control].valRules - object field
      // this.formData[control].value - field values
      // this.formData[control].errorValue -  is false?
      // this.formData[control].errorMessage - if false return message
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
            this.formData[control].errorValue = true;
            this.formData[control].errorMessage = valRule.message;
            error = true;
          }
        }
      });
      if (!error) {
        this.formData[control].errorValue = false;
        this.formData[control].errorMessage = "";
      }
    },
    controlValueChanged(payload) {
      this.formData[payload.control].value = payload.value;
    },
    controlValueBlured(control) {
      this.validate(control);
    },
  },
  components: { ControlComp },
};
</script>

<style scoped></style>
