const resultValidation = function (filtrArray, controlInput, bolVal) {

  if (!(filtrArray.find((object) => object.control === controlInput))
    ||
    (!filtrArray.length)) {
    filtrArray.push({ control: controlInput, value: false })
  }

  if (filtrArray.find((object) => object.control === controlInput)) {
    const chosenObject = filtrArray.find((object) => object.control === controlInput)

    if (bolVal) {
      chosenObject.value = true
    } else {
      chosenObject.value = false

    }

  }
}


//   const obj = filtrArray.find((object) => object.control === controlInput);

//   if (obj) {
//     obj.value = bolVal
//   } else {
//     filtrArray.push({ control: controlInput, value: false })
//   }
// }

export default resultValidation