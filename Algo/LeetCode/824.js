/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  sentence = "I speak Goat Latin"
  // Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
  let sentanceArray = sentence.split(' ')

  let upperVowels = ["A","E", "I", "O", "U"]
  let lowerVowels = ["a","e", "i", "o", "u"]
  let counter = false
  
  let output = []
  
  let char = 'a'
  
  
  function hasVowel(upperVowels, lowerVowels, letter) { 
    if (upperVowels.includes(letter) || lowerVowels.includes(letter)) { 
      counter = true
    }
  }
  
  console.log(sentanceArray)
  for (let i = 0; i < sentanceArray.length; i++) { 
    let splitWord = sentanceArray[i].split('')
    let splitLetter = splitWord[0]
    hasVowel(upperVowels, lowerVowels, splitLetter)
    if (counter == true) {
      console.log('detetcted True')
      let repeatChar = char.repeat(i + 1)
      splitWord = splitWord + 'ma' + repeatChar
      output.push(splitWord)
      counter = false
    } else {
      let wordLength = splitWord.length
      let newWord = splitWord.slice(0)
      let moveLetter = newWord[0]
      let 
      console.log(moveLetter)
      
    }
    
  }
    console.log(output)

};

toGoatLatin()