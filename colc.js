//code to accept input?
//var computers = parseInt(readline(), 10 )
var disp = 0;
disp
document.getElementById("output").innerHTML= disp;
function include(A) {
   var x= A;
    disp+= x;
    //changing the color of disp on an event. it becomes green on displaying result and black again on calculations
    document.getElementById("output").style.color = "black";
    //printing disp
    document.getElementById("output").innerHTML= disp;
}

//calculating results
function doBoth() {
    result();//main result calc
    divBackground();//change background image on click
    lightShow();//also perform lightshow on click
    //dont know why it wont work 
    //changR();
}//main result function
function result() {
    disp = eval?.(disp);
    document.getElementById("output").innerHTML= disp;
    document.getElementById("output").style.color = "yellow";
    changR();
}

function clr() {
    disp = ' ';
    document.getElementById("output").innerHTML= disp;
}
//to backspace
function bckSpace() {
    disp= disp.slice(0, -1);
    document.getElementById("output").innerHTML= disp;
}
//hiding and showing objects
function hiDe() {
    document.getElementById('texxt').style.display = "none";
}
//some css-like editing to the descriptionS
function disPlay() {
    document.getElementById('texxt').style.display = "block";
    document.getElementById('texxt').style.backgroundColor = "blue";
    document.getElementById('texxt').style.color = "white";
}

//been trying to use this function to change that small image below the display 
//when the equals button is clicked but to no avail.
//Research changing pictures with javascript. Maybe it would help.

/*function piChange() {
    var displey = document.getElementById('displey');
    if (displey == redviolet){
        displey.style.backgroundColor = "white";
    }
    else {
        displey.style.backgroundColor = "blueviolet"
    }
alert("im done"); //to check if the fuction is even being run
}*/
function changR() {
    document.getElementsByName('bac')[0].style.backgroundColor = "blue";
    //alert("check");
}



//This function randomly displays different colours from a given array on a 1s interval
function lightShow() {
    var lighT = ["yellow","blue","red","green"];/* array the colours wil be chosen from */

    //FINALLY IT'S WORKING!!! LET'S GOOO..
    //function to switch the background color between the array above every one second
     var myInterval = setInterval(function(){
        /*function to get a random number between 0 and 3(we use 4 but it is not included) */
        function getRandomInt(){
            return Math.floor(Math.random() * (4 - 0)) + 0;
        }

        /* function for the lightshow
        forEach executes the contained code for each item in the array

        value is the item info, like yellow for the first
        index is the item position in the array, like 0 for the first
        array is the array itself
         */
        lighT.forEach(function(value, index, array) {
        document.getElementsByName('bac')[0].style.backgroundColor = lighT[getRandomInt()/* replaces here with the value of the random number function*/]; 
        });
    }, 1000);/* 1000 means every second, the transition time is set in the css file  */
}

//now m trying to manipulate images with javascript. lemme try it again in test 2
var img = document.getElementById('imoge');
function setSrcAttribute() {
    img.setAttribute("src", "hi-tech.jpg");
    alert("DDone");
}

function divBackground() {
    document.getElementById("center").style.backgroundImage = 'url("hi-tech.jpg")';
}

//codes that activate automatically
hiDe();
