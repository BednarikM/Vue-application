<template>
  <LoadingComp v-if="loading" />
  <div v-else class="page">
    <HeaderComp :title="titleText" />
    <FormComp :settings="formSettings" :reminder="reminder" :mode="mode" />
  </div>
</template>

<script>
import FormComp from "../components/FormComp";
import LoadingComp from "../components/LoadingComp";
import HeaderComp from "../components/HeaderComp";
import formSettings from "../../helpers/formSettings";
import formatDate from "../../helpers/dateFormator";

export default {
  name: "FormPage",
  data() {
    return {
      formSettings: formSettings,
      loading: true,
      reminder: "",
      title: "",
    };
  },
  computed: {
    mode() {
      return this.$route.params.id ? "edit" : "add";
    },
    titleText() {
      return this.mode === "edit" ? "Edit task details" : "Add new task";
    },
  },
  created() {
    setTimeout(() => {
      if (this.mode === "edit") {
        fetch(`http://localhost:5000/tasks/${this.$route.params.id}`)
          .then((res) => res.json())
          .then((data) => {
            const newData = data;

            this.reminder = newData.reminder;
            Object.keys(newData).forEach((key) => {
              if (key in this.formSettings) {
                if (key === "startday" || key === "lastday") {
                  this.formSettings[key].initialValue = formatDate(
                    newData[key]
                  );
                } else {
                  this.formSettings[key].initialValue = newData[key];
                }
              }
            });
            this.loading = false;
          });
      } else if (this.mode === "add") {
        this.reminder = false;
        Object.keys(formSettings).forEach((key) => {
          if (key in this.formSettings) {
            this.formSettings[key].initialValue = "";
          }
        });
        this.loading = false;
      }
    }, 1000);
  },
  components: { FormComp, LoadingComp, HeaderComp },
};
</script>

<style>
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
  border: 1px solid rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5px;
}
</style>
