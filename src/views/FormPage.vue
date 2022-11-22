<template>
  <div class="page">
    <h1>{{ tittle }}</h1>
    <LoadingComp v-if="loading" />
    <FormComp v-else :settings="formSettings" />
  </div>
</template>

<script>
import FormComp from "../components/FormComp";
import LoadingComp from "../components/LoadingComp";

export default {
  name: "FormPage",
  data() {
    return {
      formSettings: {
        task: {
          type: "text",
          initialValue: "",
          placeholder: "'Teambuilding'",
          label: "task",
          valRules: [
            { rule: "required", message: "The task name is required" },
            {
              rule: "minLength",
              par: 2,
              message: "The task must contain atleast 2 chars",
            },
            {
              rule: "maxLength",
              par: 30,
              message: "The task can contain max 30 chars",
            },
          ],
        },
        firstname: {
          type: "text",
          initialValue: "",
          placeholder: "'Peter'",
          label: "firstname",
          valRules: [
            { rule: "required", message: "The firstname is required" },
            {
              rule: "minLength",
              par: 2,
              message: "The task must contain atleast 2 chars",
            },
            {
              rule: "maxLength",
              par: 30,
              message: "The task can contain max 30 chars",
            },
          ],
        },
        lastname: {
          type: "text",
          initialValue: "",
          placeholder: "'Jonhson'",
          label: "lastname",
          valRules: [
            { rule: "required", message: "The lastname name is required" },
            {
              rule: "minLength",
              par: 2,
              message: "The task must contain atleast 2 chars",
            },
            {
              rule: "maxLength",
              par: 30,
              message: "The task can contain max 30 chars",
            },
          ],
        },
        startday: {
          type: "text",
          initialValue: "",
          placeholder: "DD.MM.YYYY",
          label: "startday",
          valRules: [
            { rule: "required", message: "The start day is required" },
            { rule: "rightFormat", message: "wrong format, use DD.MM.YYYY" },
            { rule: "validDate", message: "the date is not valid" },
            { rule: "isfuture", message: "the date must be today or Future" },
          ],
        },
        lastday: {
          type: "text",
          initialValue: "",
          placeholder: "DD.MM.YYYY",
          label: "lastday",
          valRules: [
            { rule: "required", message: "The start day is required" },
            { rule: "rightFormat", message: "wrong format, use DD.MM.YYYY" },
            { rule: "validDate", message: "the date is not valid" },
            { rule: "isfuture", message: "the date must be today or Future" },
            {
              rule: "isNotDistantFuture",
              message: "the date cant be +100 years in future",
            },
          ],
        },
      },
      loading: true,
    };
  },
  computed: {
    mode() {
      return this.$route.params.id ? "edit" : "add";
    },
    tittle() {
      return this.mode === "edit" ? "Edit task details" : "Add new task";
    },
  },
  components: { FormComp, LoadingComp },
  created() {
    if (this.mode === "edit") {
      // this.$store.dispatch("fetchTask", "" + this.$route.params.id);
      fetch(`/api/tasks/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          Object.keys(data).forEach((key) => {
            if (key in this.formSettings) {
              this.formSettings[key].initialValue = data[key];
            }
          });
          this.loading = false;
        });
    } else {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", sans-serif;
}

.page {
  max-width: 500px;
  margin: 30px auto;
  min-height: 400px;
  border: 1px solid rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5px;
}
</style>
