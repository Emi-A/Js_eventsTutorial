window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
    //some code here
   
};

//the listener function here
function myFunction() {
    alert("wuju");
}

document.getElementById("theGreen").addEventListener("click",myFunction);