const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must right something");
  } else {
    let li = document.createElement("li"); // each item
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span"); // delete icon
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
