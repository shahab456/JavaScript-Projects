function Call_Loop() {
  var digit = "";
  var timer = 10;
  while (timer > 0) {
    digit += `<br> ${timer}...`;
    timer--;
  }
  document.getElementById("Loop").innerHTML = `T-minus ${digit} until launch`;
}

function for_Loop() {
  var text = "";
  for (var i = 1; i < 6; i++) {
    text += `${i}.  List the #${i} instrument's owner here: ________<br>`;
    document.getElementById("List_of_Instruments").innerHTML = text;
  }
}

function array_Function() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var text = "";
  for (var i = 0; i < days.length - 1; i++) {
    text += `If today is ${days[i]}, then tomorrow <em>will be</em> ${
      days[i + 1]
    }.  Over and over.  This never stops...<br>`;
    document.getElementById("Array").innerHTML = text;
  }
}

const Earth = { order_from_Sun: "3rd", moons: 1, nominal_gravational_acceleration: 9.807, lifeforms: "various" };
const Jupiter = { order_from_Sun: "5th", moons: 79, nominal_gravational_acceleration: 24.79, lifeforms: "no" };
Earth.lifeforms = "numerous";
Earth.habitable = "True";
Jupiter.habitable = "False";

function constant_function() {
  document.getElementById(
    "Constant",
  ).innerHTML = `The <u>${Earth.order_from_Sun}</u> planet from the Sun has <u>${Earth.moons}</u> moon, yet contains <u>${Earth.lifeforms}</u> forms of life; its habitability-rating is  <u>${Earth.habitable}</u>. <br> The <u>${Jupiter.order_from_Sun}</u> planet from the Sun has <u>${Jupiter.moons}</u> moons, yet contains <u>${Jupiter.lifeforms}</u> forms of life; its habitability-rating is therefore <u>${Jupiter.habitable}</u>.`;
}
