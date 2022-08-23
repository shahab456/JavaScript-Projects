function calculateSum(){
    val=0;
    sum=0;
    num=document.getElementById('num').value;
    
    for(let i=0;i<=num;i++){
        sum +=i;
    }
    document.getElementById('output').innerText='Sum From 1 to '+num+' is: '+sum;
}   