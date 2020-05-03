let output_box = document.getElementById("outputBox");
output_box.style.cssText =
  "background: rebeccapurple; color: lightgoldenrodyellow; height: 30px; width: 200px; font-size: 20px; padding: 30px; margin: 20px; ";

document.getElementById("redBtn").onclick = set_innerHTML(
  output_box,
  "You win!"
);

document.getElementById("blackBtn").onclick = set_innerHTML(
  output_box,
  "Nope- Drink!"
);

function log_red() {
  console.log("red");
}

function set_innerHTML(object, text) {
  object.innerHTML = text;
}
