let sumOfMultiplications = (arr0, arr1) => {  // obliczanie sumy kolejnej wagi * kolejne wejscie
  let summed = 0
  for(let indx of Array(arr0.length).keys()){
    summed += (arr0[indx] * arr1[indx])
  }
  return summed
}

exports.activatingFunction = (inputArr, weights, threshold) => {  //funkcja aktywujaca znakowa
  // console.log(sumOfMultiplications(inputArr, weights) >= threshold ? 1 : -1)
  return (sumOfMultiplications(inputArr, weights) >= threshold ? 1 : -1)
}

exports.anyErrors = (inputArr, weights, threshold, T) => { //Obliczanie ERR
  return T - exports.activatingFunction(inputArr, weights, threshold) // 0 rzutowane jest do false
}

exports.fixWeights = (inputArr, weights, err) => {
  let new_weights = []
  for(let indx of weights.keys()){
    new_weights[indx] = weights[indx] + 0.5 * err * inputArr[indx] //0.5 -- stała uczenia
  }
  return new_weights
}

exports.fixThreshold = (threshold, err) => {
  return threshold -= err * 0.5 // 0.5 -- stała uczenia
}

exports.getThreshold = () => {
  let multiplicator = Math.random() >= 0.5 ? 1 : -1
  return parseFloat(((Math.random() / 2).toFixed(2))) * multiplicator
}

let getRandomWeights = function(sizeOfArray){
  return Array.from({length: sizeOfArray}, () => {
    let multiplicator = Math.random() >= 0.5 ? 1 : -1
    return parseFloat(Math.random().toFixed(2)) * multiplicator
  })
}

exports.createWeights = (thresholds) => {
  let weights = []
  let tmpWeights = Array(10).fill(1).map((x) => getRandomWeights(1600))
  for(let indx of tmpWeights.keys()){
    weights.push([-1 * thresholds[indx], ...tmpWeights[indx]])
  }
  return weights
}
