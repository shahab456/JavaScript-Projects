function concat() {
  var string1 = "Apple ";
  var string2 = "Banana ";
  var string3 = "Coconut";

  var res = string1.concat(string2, string3);

  document.getElementById("concat").innerHTML = res;
}


function slice() {
  var string = document.getElementById("slicingParagraph").innerHTML;
  document.getElementById("slicingResult").innerHTML = string.slice(12, 20);
}

function numberConvert() {
  var n = 42;
  document.getElementById("number2string").innerHTML = n.toString();
}
