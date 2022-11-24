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
  document.body.appendChild(newEl);
}

PoemButton.prototype.buttonPressed = function (text) {
  return alert(text);
};

function btn() {
  for (var i = 0; i < arr.length; i++) {
    const element = arr[i].buttonCaption;
    var obj = new PoemButton(element);
  }

  const BTN = document.querySelectorAll(".btn");
  for (var i = 0; i < BTN.length; i++) {
    BTN[i].onclick = function (e) {
      var str = e.target.value;
      str = +str[str.length - 1];
      var text = arr[str - 1].alertText;
      PoemButton.prototype.buttonPressed(text);
    };
  }
}
