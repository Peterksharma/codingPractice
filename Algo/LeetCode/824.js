/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  sentence = "The quick brown fox jumped over the lazy dog"
  

  // Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
  let sentanceArray = sentence.split(' ')

  function checkVowel(char) {
    const vowels = "aeiouAEIOU"
    return vowels.includes(char)
  }
  

  let output = '' 
  let repeatChar = 'a'
  
  for (let i = 0; i < sentanceArray.length; i++) {
        let repeatAppend = repeatChar.repeat(i+1)
        let currentWord = sentanceArray[i]
        let firstLetter = sentanceArray[i].charAt(0)
        let restOfTheWord = currentWord.substring(1)
        
        function updateWord(currentWord) {
          let completedWord = " " + restOfTheWord + firstLetter + 'ma' + repeatAppend
          output = output + completedWord
          console.log(output)
        }
        
        
        console.log(firstLetter)
    if (checkVowel(firstLetter) == true) {
          output += ' ', sentanceArray[i] + 'ma' + repeatAppend
    } else { 
      updateWord(currentWord)
    }
  }
  
  
  // for (let i = 0; i < sentanceArray.length; i++) { 
  //   let splitWord = sentanceArray[i].split('')
  //   let splitLetter = splitWord[0]
  //   hasVowel(upperVowels, lowerVowels, splitLetter)
  //   if (counter == true) {
  //     let repeatChar = char.repeat(i + 1)
  //     output = splitWord + 'ma' + repeatChar
  //     console.log(output)
  //     counter = false
  //   } else {
  //     let firstLetter = sentanceArray[i].charAt(0)
  //     let restOfTheWord = sentanceArray[i].substring(1)
  //     let repeatAppend = char.repeat(i+1)
  //     let completedWord = " " +restOfTheWord + firstLetter + 'ma' + repeatAppend
  //     output = output + completedWord
  //   }    
  // }
  // 
  
  
  
  
  
  console.log(output)
  return output
};

toGoatLatin()