const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must right something");
  } else {
    let li = document.createElement("li"); // each task
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span"); // delete icon
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// toggle state of task
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// save to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// displays saved storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// localStorage.clear(); // deletes all local storage
