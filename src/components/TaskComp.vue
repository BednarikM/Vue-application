<template>
  <div
    @dblclick="toggleReminder(task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.task }}
      <i @click="deleteTask(task.id)" class="fa-solid fa-trash"></i>
    </h3>
    <p>{{ task.lastname }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskComp",
  props: {
    task: Object,
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },

    toggleReminder(id) {
      this.$emit("toggle-reminder", id);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "../styles/variables.styl"
.fa-trash {
  color: red;
}
.task {
  background: $white-color;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task.reminder {
  border-left: 5px solid $primary-color;
}
</style>
