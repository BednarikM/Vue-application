<template>
  <form @submit="onSubmit" ref="taskForm" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="task" name="task" placeholder="Add Task" />
    </div>

    <div class="form-name-container">
      <div class="form-control">
        <label>First name</label>
        <input
          type="text"
          v-model="firstname"
          name="firstname"
          placeholder="Add first name"
        />
      </div>

      <div class="form-control">
        <label>Last name</label>
        <input
          type="text"
          v-model="lastname"
          name="lastname"
          placeholder="Add first name"
        />
      </div>
    </div>

    <div class="form-date-container">
      <div class="form-control">
        <label>Start Day</label>
        <input
          type="text"
          v-model="startday"
          name="day"
          placeholder="DD/MM/YYYY"
        />
      </div>

      <div class="form-control">
        <label>Finish Day</label>
        <input
          type="text"
          v-model="finishday"
          name="day"
          placeholder="DD/MM/YYYY"
        />
      </div>
    </div>

    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTaskComp",
  data() {
    return {
      task: "",
      firstname: "",
      lastname: "",
      startday: "",
      finishday: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.task) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        task: this.task,
        firstname: this.firstname,
        lastname: this.lastname,
        startday: this.startday,
        finishday: this.finishday,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      this.task = "";
      this.firstname = "";
      this.lastname = "";
      this.startday = "";
      this.finishday = "";
      this.reminder = false;
    },
  },
  emits: ["add-task"],
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.form-control input {
  padding: 10px 20px;
  font-size: 20px;
}

.form-date-container,
.form-name-container {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.form-name-container .form-control input,
.form-date-container .form-control input {
  width: 100%;
}
</style>
