function none(i){
  i.style.display = "none";
}
function hide(){
 let a = document.querySelectorAll('.port_text')
  none(a[0]); 
  none(a[1]); 
  none(a[2]); 
  none(a[3]); 
  none(a[4]);
}
function showDiv() {
    div = document.getElementById('sp2021');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('sum2020').style.display = "none";
    document.getElementById('f2020').style.display = "none"
    }
}
function showDiv1() {
    div = document.getElementById('f2020');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
      document.getElementById('sum2020').style.display = "none";
    document.getElementById('sp2021').style.display = "none"
    }
}

function showDiv2() {
    div = document.getElementById('sum2020');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
      document.getElementById('sp2021').style.display = "none";
    document.getElementById('f2020').style.display = "none"
    }
}
function displayNeurosight(){
  div = document.getElementById('neurosight');
  if (div.style.display === "block"){
      div.style.display = "none";
    }else{
    hide();
    div.style.display = "block";
    }
}


function displayCrystalQwr(){
   div = document.getElementById('qwr');
  if (div.style.display === "block"){
      div.style.display = "none";
    }else{
    hide();
    div.style.display = "block";
    
    }
}

function displayRenew(){
   div = document.getElementById('renew');
  if (div.style.display === "block"){
      div.style.display = "none";
    }else{
    hide();
    div.style.display = "block";
    }
}

function displayClimateClock(){
   div = document.getElementById('climate_clock');
  if (div.style.display === "block"){
      div.style.display = "none";
    }else{
    hide();
    div.style.display = "block";
    }
}

function displayMstier(){
   div = document.getElementById('mstier');
  if (div.style.display === "block"){
      div.style.display = "none";
    }else{
    hide();
    div.style.display = "block";
    }
}
function displayMiztier(){
   div = document.getElementById('miztier');
  if (div.style.display === "block"){
      div.style.display = "none";
    }else{
    hide();
    div.style.display = "block";
    }
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


