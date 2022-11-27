<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskComp
      @detail-task="detailTask"
      @edit-task="editTask"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :task="task"
    />
  </div>
</template>

<script>
import TaskComp from "./TaskComp.vue";

export default {
  name: "TasksComp",
  props: {
    tasks: Object,
  },
  methods: {
    detailTask(id) {
      this.$emit("detail-task", id);
    },
    editTask(id) {
      this.$emit("edit-task", id);
    },
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
    toggleReminder(id) {
      this.$emit("toggle-reminder", id);
    },
  },
  emits: ["detail-task", "edit-task", "delete-task", "toggle-reminder"],
  components: { TaskComp },
};
</script>

<style scoped></style>
