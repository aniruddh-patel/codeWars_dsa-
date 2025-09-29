function string_array(string) {
  if (string.length == 0) console.log("empty string");

  const small_arr = [];
  const big_arr = [];

  let temp1 = string.toUpperCase();
  // let temp2=string.toLowerCase()

  for (let i = 0; i < string.length; i++) {
    if (temp1[i] != string[i]) small_arr.push(string[i]);
    else if (temp1[i] == string[i]) {
      if (temp1[i] >= 0 && temp1[i] <= 9) {
      }
      else{big_arr.push(string[i])}
    }
  }

  console.log(small_arr);
  console.log(big_arr);
}
string_array("AnIr12u3ddH");