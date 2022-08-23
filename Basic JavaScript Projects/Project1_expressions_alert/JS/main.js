function greeting() {
    text1=document. getElementById('myname').value;
    text2=document. getElementById('myfamily').value;
    fullName=text1.concat(' ' +text2);
  window.alert('Hi! '+fullName);
  lbl=document.getElementById('fullName');
  fullName.fontcolor("red");
  lbl.innerHTML =fullName;
}