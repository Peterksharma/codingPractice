//iterate through the string
//find the first P or B
//iterate through into the inverse of above is found (if p is found looking for a B, vise verse)
//Count the space between


/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
    
    // N = 5       //Cell Length
    // C = "APABA"   //Order of things
    // X = 1       //Valid Min Distance
    // Y = 2       //Valid Max Distance
    // 
    N = 8
    C = ".PBAAP.B"
    X = 1
    Y = 3

  let possiblePhotoCounter = 0
  let distanceCounter = 0
  let positions = {P:[], A:[], B:[]}
  
  for (let i = 0; i < C.length; i++) { 
    if (C[i] == "P") {
      positions.P.push(i) 
    } else if(C[i] == "B") { 
      positions.B.push(i) 
    } else if (C[i] =="A") {
      positions.A.push(i)
    }
  }
  
  let pairArray = []
   
  for (let i = 0; i < positions.P.length; i++) {
    for (let j = 0; j < positions.B.length; j++) {
        let pPers = positions.P[i]
        let bD = positions.B[j]
        let distBetween = Math.abs(pPers-bD)
      console.log('distance Between: ', distBetween, '. Photographer', pPers, bD)
      if (distBetween > X && distBetween < Y) {
        console.log('possible Match: ', pPers, bD)
      }
        
        
        // pairArray.push([positions.P[i], positions.B[j]])
      }
  }


  
  return;
}

getArtisticPhotographCount()
