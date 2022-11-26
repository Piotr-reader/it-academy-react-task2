const REQUEST_URL = "https://fe.it-academy.by/Examples/test_JSE.json";
const SHR = new XMLHttpRequest();
SHR.open("GET", REQUEST_URL);
var arr;
SHR.onload = () => {
  arr = JSON.parse(SHR.response);
  btn();
};
SHR.send();

function PoemButton(buttonCaption, alertText) {
  this.buttonCaption = buttonCaption;
  this.alertText = alertText;
  var newEl = document.createElement("input");
  newEl.classList.add("btn");
  newEl.value = this.buttonCaption;
  newEl.dataset.text = this.alertText;
  document.body.appendChild(newEl);

  // for (var i = 0; i < BTN.length; i++) {
  //   BTN[i].onclick = function (e) {
  //     var str = e.target.dataset;
  //     console.log(str);
  //   };
  // }
}

PoemButton.prototype.buttonPressed = function () {
  const BTN = document.querySelector(".btn");
  // console.log(this.alertText);
  // return alert(text);
};

function btn() {
  for (var i = 0; i < arr.length; i++) {
    const element = arr[i].buttonCaption;
    const text = arr[i].alertText;
    var obj = new PoemButton(element, text);
  }
}

PoemButton.prototype.buttonPressed();
