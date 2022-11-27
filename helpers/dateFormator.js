const formatDate = function (dateString) {


  if (typeof dateString !== "string") {
    return ""
  }

  if (dateString.includes(".", 2)) {
    const dateArray = dateString.split('.')
    const day = dateArray[2].length > 1 ? dateArray[2] : "0" + dateArray[2]
    const month = dateArray[1].length > 1 ? dateArray[1] : "0" + dateArray[1]
    const year = dateArray[0]


    const newArray = day + '-' + month + '-' + year
    return newArray
  }

  if (dateString.includes("-", 2)) {
    const dateArray = dateString.split('-')
    const day = dateArray[2].length > 1 ? dateArray[2] : "0" + dateArray[2]
    const month = dateArray[1].length > 1 ? dateArray[1] : "0" + dateArray[1]
    const year = dateArray[0]

    const newArray = day + '.' + month + '.' + year
    return newArray
  }
}

export default formatDate