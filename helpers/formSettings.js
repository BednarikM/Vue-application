export default {

  task: {
    type: "text",
    initialValue: "",
    placeholder: "'Teambuilding'",
    label: "Task ",
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
    label: "First name",
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
    label: "Last name",
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
    label: "Start day",
    valRules: [
      { rule: "required", message: "The start day is required" },
      { rule: "rightFormat", message: "wrong format, use DD.MM.YYYY" },
      { rule: "validDate", message: "the date is not valid" },
      { rule: "isNotDistantPast", message: "this date cannot be a year younger than today" },
    ],
  },

  lastday: {
    type: "text",
    initialValue: "",
    placeholder: "DD.MM.YYYY",
    label: "Last day",
    valRules: [
      { rule: "required", message: "The start day is required" },
      { rule: "rightFormat", message: "wrong format, use DD.MM.YYYY" },
      { rule: "validDate", message: "the date is not valid" },
      { rule: "isNotDistantPast", message: "this date cannot be a year younger than today" },
      {
        rule: "isNotDistantFuture",
        message: "the date cant be +100 years in future",
      },
    ],
  },
}