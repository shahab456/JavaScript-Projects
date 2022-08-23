
function MyFunction(input) {
  this.var1 = input;
  this.var2 = false;

  return this.var1==this.var2 ? true : false;
}

let myfunction = new MyFunction("NAME");

function update(){
    let myfunction2 = new MyFunction(document.querySelector('#Input1').value);
    document.querySelector('#New_and_This').innerHTML = myfunction2;
    console.log(myfunction2)
}


