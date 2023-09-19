var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/komnata-igroka.webp") {
    myImage.setAttribute("src", "images/komnata-igroka2.png");
  } else {
    myImage.setAttribute("src", "images/komnata-igroka.webp");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h3");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Создай свое место мечты, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Создай свое место мечты, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};






