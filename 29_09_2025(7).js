// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.



//mysolution
function reverseChar(char){
  let index_value;
  let code=char.charCodeAt(0);
  if(code>=65 && code<=90){
    index_value=code-65;
    return String.fromCharCode(97+index_value)
    }
  else if(code>=97 && code <=122){
    index_value=code-97;
    return String.fromCharCode(65+index_value)
  }
  else return char;
}


String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let string="";
  for(let i=0;i<this.length;i++){
    string=string+reverseChar(this[i]);
  }
  return string;
}


//solution checked
String.prototype.toAlternatingCase = function () {
  return this.split('').map(function(x){
    if(x >= 'A' && x <= 'Z') return x.toLowerCase();
    if(x >= 'a' && x <= 'z') return x.toUpperCase();
    return x;
  }).join(''); 
}