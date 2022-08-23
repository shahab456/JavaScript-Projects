
function my_dictionary(){
    var Country = {
        Name: "Iran",
        Capital: "Tehran",
    }
    if(document.getElementById("btn").innerHTML=='Show Dictionary'){
       
        document.getElementById("btn").innerHTML="Delete key";    
    }
    else{
        delete Country.Name;
        document.getElementById("btn").innerHTML="Show Dictionary";    
    }
    document.getElementById("Dictionary").innerHTML=Country.Name+' -> '+ Country.Capital;

}