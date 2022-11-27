<template>
  <LoadingComp v-if="loading" />
  <div v-else class="page">
    <HeaderComp title="Task tracker" />

    <TasksComp
      @detail-task="detailTask"
      @edit-task="editTask"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasksStore"
    />
    <div class="btns-container">
      <ButtonComp @btnClick="btnClick" text="default" :primaryColor="true" />
      <ButtonComp @btnClick="btnClick" text="A-Z" :primaryColor="true" />
      <ButtonComp @btnClick="btnClick" text="Z-A" :primaryColor="true" />
    </div>
  </div>
</template>

/// SCRIPT ///

<script>
import LoadingComp from "../components/LoadingComp";
import HeaderComp from "../components/HeaderComp";
import TasksComp from "../components/TasksComp";
import ButtonComp from "../components/ButtonComp.vue";

export default {
  name: "HomePage",
  components: {
    LoadingComp,
    HeaderComp,
    TasksComp,
    ButtonComp,
  },
  data() {
    return {
      loading: true,
      sorting: "default",
    };
  },
  methods: {
    btnClick(e) {
      this.sorting = e.target.textContent;
    },
    detailTask(id) {
      this.$router.push(`/detail/${id}`);
    },
    editTask(id) {
      this.$router.push(`/form/${id}`);
    },
    deleteTask(id) {
      if (confirm("Do you really want to delete?")) {
        this.$store.dispatch("deleteTask", id);
      }
    },
    toggleReminder(id) {
      this.$store.dispatch("toggleTaskReminder", id);
    },
  },
  computed: {
    tasksStore() {
      const tasksStore = this.$store.state.tasks.slice();

      if (this.sorting === "A-Z") {
        return tasksStore.sort((a, b) => {
          return a.task.localeCompare(b.task);
        });
      } else if (this.sorting === "Z-A") {
        return tasksStore.sort((a, b) => {
          return b.task.localeCompare(a.task);
        });
      }
      return tasksStore;
    },
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch("fetchTasks");
      this.loading = false;
    }, 1000);
  },
};
</script>

/// STYLES ///

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

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

.btns-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
