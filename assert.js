function setup() {
  addStyle();
  var list = document.createElement("ul");
  list.setAttribute("id", "results");
  document.body.appendChild(list);
}

function assert(value, description) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(description));
  document.getElementById("results").appendChild(li);
}

function addStyle() {
  var style = document.createElement("style");
  var css = "#results li.pass { color: green; }" +
            "#results li.fail {color: red; text-decoration: line-through;";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}