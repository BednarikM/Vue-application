import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {},
    task: {}
  },
  getters: {
  },
  mutations: {
    setTasks(state, data) {
      state.tasks = {}
      state.tasks = data
    },
    setTask(state, data) {
      state.task = {}
      state.task = data
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id)
    },
    addTask(state, data) {
      state.tasks = [...state.tasks, data];
    },
    toggleTaskReminder(state, payload) {
      state.tasks = state.tasks.map((task) => {
        return task.id === payload.id ? { ...task, reminder: payload.data.reminder } : task;
      });


    },
  },
  actions: {
    fetchTasks(context) {
      fetch("api/tasks")
        .then((res) => res.json())
        .then((data) => context.commit("setTasks", data));
    },

    // `api/tasks/${id}` = doesnt work
    // `/api/tasks/${id}` = work
    // http://localhost:5000/tasks/${id} = work

    fetchTask(context, id) {
      fetch(`/api/tasks/${id}`)
        .then((res) => res.json())
        .then((data) => context.commit("setTask", data));
    },
    deleteTask(context, id) {
      fetch(`api/tasks/${id}`, {
        method: "DELETE",
      }).then((res) => res.status === 200 ? context.commit("deleteTask", id) : alert("Error deleting task"))
    },

    addTask(context, newTask) {

      fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      }).then((res) => res.json()).then(data => context.commit("addTask", data))
    },

    toggleTaskReminder(context, id) {

      fetch(`api/tasks/${id}`).then(res => res.json()).then(taskToToggle => {
        const updateTask = {
          ...taskToToggle, reminder: !taskToToggle.reminder
        };
        return updateTask
      }).then(updateTask => {
        fetch(`api/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updateTask),
        }).then(res => res.json()).then(data => context.commit("toggleTaskReminder", { id: id, data: data }))
      })
    }
  },
  modules: {
  }
})
