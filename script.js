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
  document.getElementById("script").before(newEl);
  newEl.onclick = function () {
    self.buttonPressed();
  };

  self.buttonPressed = function () {
    alert(self.alertText);
  };
}

function btnCreate() {
  for (var i = 0; i < arr.length; i++) {
    var obj = new PoemButton(arr[i].buttonCaption, arr[i].alertText);
  }
}
