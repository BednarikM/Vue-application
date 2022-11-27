<template>
  <div
    @dblclick="toggleReminder(task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <div class="task-container">
      <div class="info-container">
        <h3>
          <span class="task-text">{{ task.task }}</span>
        </h3>
        <p>
          <span class="startday">{{ this.startDayFormated }}</span>
          <span> &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp; </span>
          <span class="lastday">{{ this.lastDayFormated }}</span>
        </p>
      </div>
      <div class="icon-container">
        <i @click="detailTask(task.id)" class="fa-solid fa-circle-info"></i>
        <i @click="editTask(task.id)" class="fa-solid fa-pen"></i>
        <i @click="deleteTask(task.id)" class="fa-solid fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "../../helpers/dateFormator";

export default {
  name: "TaskComp",
  props: {
    task: Object,
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
  computed: {
    startDayFormated() {
      return formatDate(this.task.startday);
    },
    lastDayFormated() {
      return formatDate(this.task.lastday);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "../styles/variables.styl"

.task {
  background: $white-color;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px
  border-radius: 5px
}

.task-container {
  display: flex
  justify-content: space-between
  gap: 20px
}

.info-container {
  display:flex;
  flex-direction: column;
  gap: 10px;
}

.icon-container {
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.task h3 {
  display: flex;
  align-items: center;

}

.task-text {
  font-size 20px
  flex-grow: 1
}

.fa-solid {
  font-size: 25px
  transform: scale(0.9)
  transition: all 0.3s ease-in-out
}

.fa-solid:hover {
  font-size: 25px
  transform: scale(1.2)
  color: black
}


.fa-trash {
  color: red;
}

.fa-pen {
  color: $primary-color
}

.fa-circle-info {
  color: $primary-color
}

.task.reminder {
  border-left: 5px solid $primary-color;
}

.startday, .lastday {
  font-weight 500}
</style>
