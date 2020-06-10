const findAll = (array, n) => {
  let occurrences = [];
  array.forEach((v, i) => {
    if (v === n) {
      occurrences.push(i)
    }
  })
  return occurrences
}




