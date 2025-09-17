/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    text = "hello world"
    brokenLetters = "ad"

    let wordArray = text.split(' ')
    let counter = 0

    for (let i = 0; i < wordArray.length; i++) {
        let canUse = true
        for (let j = 0; j < brokenLetters.length; j++) {
            if(wordArray[i].includes(brokenLetters[j])){
                canUse = false
            }
        }
        if(canUse) {
            counter++
        }
        
    }
    return counter
};

canBeTypedWords()