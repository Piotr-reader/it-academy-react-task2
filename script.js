const REQUEST_URL = "https://fe.it-academy.by/Examples/test_JSE.json";
const SHR = new XMLHttpRequest();
SHR.open("GET", REQUEST_URL);
var arr;
SHR.onload = function () {
  arr = JSON.parse(SHR.response);
  btnCreate();
};
SHR.send();

function PoemButton(buttonCaption, alertText) {
  var self = this;
  self.buttonCaption = buttonCaption;
  self.alertText = alertText;
  var newEl = document.createElement("input");
  newEl.classList.add("btn");
  newEl.value = self.buttonCaption;
  newEl.onclick = function () {
    self.buttonPressed();
  };
  document.body.appendChild(newEl);

  self.buttonPressed = function () {
    alert(self.alertText);
  };
}

function btnCreate() {
  for (var i = 0; i < arr.length; i++) {
    const element = arr[i].buttonCaption;
    const text = arr[i].alertText;
    var obj = new PoemButton(element, text);
  }
}
