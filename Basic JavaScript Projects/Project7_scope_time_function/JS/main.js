function date_function() {
  if (new Date().getHours() < 12) {
    document.getElementById("today_date").innerHTML = "It's before noon.";
  } else {
    document.getElementById("today_date").innerHTML = "It's past noon.";
  }
}

function error_function() {
  console.log('Can not do it');
}
// error_function();

function ifFunction() {
  var number = document.getElementById("number_input").value;
  console.log(number);
  if (number == "") {
    document.getElementById("number_output").innerHTML = "Enter a number";
  } else if (number%2==0) {
    var reply = " EVEN";
  } else {
    var reply = " ODD";
  }
  document.getElementById("number_output").innerHTML = `You enterd <strong>${number}</strong>, It's ${reply}`;
  // Return output
}


function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It's morning";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It's afternoon.";
  } else {
    Reply = "It's evening.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}

