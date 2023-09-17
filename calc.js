//for additon. the addition function
function add() {
    var dum = document.getElementsByName("redd")[0].value;
    var dam = document.getElementsByName("bluee")[0].value;
    var dum = Number(dum)
    var dam = Number(dam)
    cam = dum + dam;
    //alert(cam)
    document.getElementById("output").innerHTML = cam;
 }
//subtraction function
 function subTract() {
    var dum = document.getElementsByName("redd")[0].value;
    var dam = document.getElementsByName("bluee")[0].value;
    var dum = Number(dum)
    var dam = Number(dam)
    cam = dum - dam;
    
    document.getElementById("output").innerHTML = cam;
 }
//division function
 function diVide() {
    var dum = document.getElementsByName("redd")[0].value;
    var dam = document.getElementsByName("bluee")[0].value;
    var dum = Number(dum)
    var dam = Number(dam)
    cam = dum / dam;
    
    document.getElementById("output").innerHTML = cam;
 }
//multiplication function
 function mulTiply() {
    var dum = document.getElementsByName("redd")[0].value;
    var dam = document.getElementsByName("bluee")[0].value;
    var dum = Number(dum)
    var dam = Number(dam)
    cam = dum * dam;
     
    document.getElementById("output").innerHTML = cam;
 }
//Square Root
 function Sroot() {
    var dum = document.getElementsByName("redd")[0].value;
    var dum = Number(dum)
    cam = Math.sqrt(dum);
    //alert(cam)
    document.getElementById("output").innerHTML = cam;
 }

 function Exponent() {
    var dum = document.getElementsByName("redd")[0].value;
    var dam = document.getElementsByName("bluee")[0].value;
    var dum = Number(dum)
    var dam = Number(dam)
    cam = dum ** dam;
    //alert(cam)
    document.getElementById("output").innerHTML = cam;
 }
 console.log('hello world');
