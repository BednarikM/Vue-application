import formatDate from "./dateFormator"

export default {

  required(value) {
    return value !== null && value !== undefined && value !== ""

  },

  isUnique(value) {
    console.log(value);
  },

  minLength(value, par) {
    return (typeof value === "string") && value.length >= par

  },

  maxLength(value, par) {
    return (typeof value === "string") && value.length <= par

  },

  rightFormat(value) {
    const regEx = new RegExp(/^\s*[0-9]?[0-9]\.[0-9]?[0-9]\.\d{4}\s*$/)
    return regEx.test(value)

  },

  validDate(value) {
    const dt = new Date(formatDate(value))
    return (dt instanceof Date) && !isNaN(dt.getTime())

  },

  // isFuture(value) {
  //   const dt = new Date(formatDate(value))
  //   const today = new Date()

  //   return dt.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)

  isNotDistantPast(value) {
    const dt = new Date(formatDate(value))
    const yearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1))

    return dt.setHours(24, 0, 0, 0) > yearAgo.setHours(0, 0, 0, 0)
  },

  isNotDistantFuture(value) {
    const dt = new Date(formatDate(value))
    const today = new Date()
    today.setHours(24, 0, 0, 0)

    const hundredYears = new Date(today.getTime())
    hundredYears.setFullYear(hundredYears.getFullYear() + 100)

    return hundredYears.getTime() > dt.getTime()

  }
}