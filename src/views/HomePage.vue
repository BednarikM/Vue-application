<template>
  <LoadingComp />
  <div class="page">
    <HeaderComp
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <div v-if="showAddTask">
      <AddTaskComp @add-task="addTask" />
    </div>

    <TasksComp
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasksStore"
    />
  </div>
</template>

/// SCRIPT ///

<script>
import LoadingComp from "../components/LoadingComp";
import HeaderComp from "../components/HeaderComp";
import TasksComp from "../components/TasksComp";
import AddTaskComp from "../components/AddTaskComp";

export default {
  name: "HomePage",
  components: {
    LoadingComp,
    HeaderComp,
    TasksComp,
    AddTaskComp,
  },
  data() {
    return {
      tasks: [this.taskStore],
      showAddTask: false,
      loading: true,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(newTask) {
      this.$store.dispatch("addTask", newTask);
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
      return this.$store.state.tasks;
    },
  },
  created() {
    this.$store.dispatch("fetchTasks");
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
  min-height: 400px;
  border: 1px solid rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5px;
}
</style>
