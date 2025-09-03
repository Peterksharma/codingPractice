let A = 12
let B = 43
let C = 53

function getSum(A, B, C) {
    if (A > 100 || B > 100 || C > 100) {
        return false
    }

  return A+B+C;
}

console.log(getSum(A,B,C))
