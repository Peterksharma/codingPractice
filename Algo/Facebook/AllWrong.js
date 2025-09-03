let N = 3
let C = "ABA"
function getWrongAnswers(N, C) {
  let results = ""

  for(let i = 0; i < N; i++) {
    if (C[i] === "A") {
      results += "B"
    } else {
      results += "A"
    }
  }
  
  return results;
}
console.log(getWrongAnswers(N,C))