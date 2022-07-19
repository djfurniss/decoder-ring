// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  //---checks the uniqueness of a string's characters---
  const checkUniqueness = (string)=>{ 
    charArr= string.split("") //each character = an element in an array
    const result = charArr.reduce((acc, char)=>{ //reducing back into a string
      if(!acc.includes(char)) acc += char //concats when the acc doesn't already include a previous character
      return acc
    }, "")//reduce all unique characters into a separate string
  return result.length === string.length //returns a boolean; true if each character passes, false if not
  }

  function substitution(input, alphabet, encode = true) {
        //---guard clause(s)---
      if(!alphabet || alphabet.length !== 26 || !checkUniqueness(alphabet)) return false; 
    input = input.toLowerCase(); //all lower cased
    let result = "" //placeholder
    let words = input.split(" ") //creates an array where each input word is an element 
      words.forEach(word=>{
        for (let i = 0; i < word.length; i++){ //loops through each character
            if(encode)result += alphabet[word[i].charCodeAt()-97] //offsets from charCodeAt 'a'
            if(!encode) result += String.fromCharCode(alphabet.indexOf(word[i])+97)
        }
        result += " " //add a space after each word'
      })
  return result.trim() //trims the extra space from the end; 
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
