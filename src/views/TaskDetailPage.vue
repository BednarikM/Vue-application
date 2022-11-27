<template>
  <LoadingComp v-if="loading" />
  <div v-else class="page">
    <header class="detail-header">
      <h1>{{ task.task }} details</h1>
      <ButtonCompVue
        @btnClick="sendToHome"
        :primaryColor="false"
        :text="'Go back'"
      />
    </header>
    <ul class="detail-list">
      <ListComp
        v-for="object in taskToDisplay"
        :key="object.label"
        :listKey="object.label"
        :listValue="object.value"
      />
    </ul>
    <ButtonCompVue
      class="btn-edit"
      @btnClick="sendToEdit"
      :primaryColor="true"
      text="Edit"
    />
  </div>
</template>

<script>
import ListComp from "../components/ListComp.vue";
import ButtonCompVue from "../components/ButtonComp.vue";
import formatDate from "../../helpers/dateFormator";
import LoadingComp from "../components/LoadingComp";

export default {
  name: "TaskDetailPage.vue",

  data() {
    return {
      settings: [],
      loading: true,
    };
  },

  methods: {
    sendToHome() {
      this.$router.push("/");
    },
    sendToEdit() {
      this.$router.push(`/form/${this.taskId}`);
    },
  },
  computed: {
    taskId() {
      return this.$route.params.id;
    },
    task() {
      return this.$store.state.task;
    },
    taskToDisplay() {
      if (Object.keys(this.task).length) {
        return [
          { label: "Id", value: this.task.id.toString() },
          { label: "First name", value: this.task.firstname },
          { label: "Last name", value: this.task.lastname },
          { label: "Start day", value: formatDate(this.task.startday) },
          { label: "Last day", value: formatDate(this.task.lastday) },
        ];
      } else {
        return [
          { label: "Id", value: "" },
          { label: "First name", value: "" },
          { label: "Last name", value: "" },
          { label: "Start day", value: "" },
          { label: "Last day", value: "" },
        ];
      }
    },
  },

  created() {
    setTimeout(() => {
      this.$store.dispatch("fetchTask", this.taskId);
      this.loading = false;
    }, 1000);
  },
  components: { ListComp, ButtonCompVue, LoadingComp },
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

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-list {
  margin-top: 20px;
}

.detail-list li:not(:last-child) {
  border-bottom: 2px solid black;
}

h1 {
  font-size: 20px;
}

.btn-edit {
  margin-top: 30px;
  width: 100%;
}
</style>
