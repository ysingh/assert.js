function setup() {
  var initialSetup = false;
  addStylesheet();
}

function assert(value, description) {
  if (!setup.initialSetup) {
    setup();
    setup.initialSetup = true;
  }
  var div = document.createElement("div");
  div.className = value ? "pass" : "fail";
  div.appendChild(document.createTextNode(description));
  document.body.appendChild(div);
}

function addStylesheet() {
  var style = document.createElement("style");
  var css = ".pass { color: green; background-color: #e8e8e8; }" +
            ".fail {color: red; text-decoration: line-through; background-color: #e8e8e8; }";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
