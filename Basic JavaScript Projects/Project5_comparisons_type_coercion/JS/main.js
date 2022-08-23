document.open();
var a ="<h1> Type is : ";
a+= typeof 41;
a+="</h1>";
document.write(a);

var var1 = "<h1>String "+41+"</h1>";
document.write(var1);

var bool1 = true;
var bool2 = false;
var result;
result = bool1==bool2;
document.write("<h1>true==false : "+result+"</h1>")

result = bool1===bool2;
document.write("<h1>true===false :"+result+"</h1>")

result = bool1>bool2;
document.write("<h1>true&#62;false : "+result+"</h1>")

result = bool1<bool2;
document.write("<h1>true&#60;false : "+result+"</h1>")

result = bool1&&bool2;
document.write("<h1>true && false : "+result+"</h1>")

result = bool1||bool2;
document.write("<h1>true || false : "+result+"</h1>")

result = !bool2;
document.write("<h1>!false : "+result+"</h1>")


document.close();