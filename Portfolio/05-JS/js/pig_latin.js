/*
Pig Latin
*/

function pigLatin(str) {
  // TODO: Initialize the word array properly
  var returnArray = [],
    wordArray = [],
    fromInput = false;

  if (str === undefined) {
    fromInput = true;
    str = document.getElementById("txtVal").value;
  }

  str = str.trim();

  if (str === "") {
    if (fromInput) {
      document.getElementById("pigLatLbl").textContent = "";
    }
    return "";
  }

  wordArray = str.split(/\s+/);

  // TODO: make sure that the output is being properly built to produce the desired result.
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var beginning = word.charAt(0);

    if (/[aeiouAEIOU]/.test(beginning)) {
      returnArray.push(word + "way");
      continue;
    }

    for (var j = 1; j < word.length; j++) {
      if (/[aeiouAEIOU]/.test(word.charAt(j))) {
        break;
      } else {
        beginning += word.charAt(j);
      }
    }

    returnArray.push(
      word.substring(beginning.length) + beginning + "ay"
    );
  }

  var result = returnArray.join(" ");
  if (fromInput) {
    document.getElementById("pigLatLbl").textContent = result;
  }

  return result;
}

// Some examples of expected outputs

console.log(pigLatin("pizza")); // "izzapay"
console.log(pigLatin("apple")); // "appleway"
console.log(pigLatin("happy meal")); // "appyhay ealmay"
