const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const submitForm = document.getElementById("form");

form.addEventListener("submit", function (e) {
  addTask();
});

function addTask() {
  if (inputBox.value === "") {
    setTimeout(function () {
      alert("Kamu harus menulis sesuatu!");
    }, 500);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTodo();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTodo();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTodo();
    }
  },
  false
);

function saveTodo() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

document.addEventListener("DOMContentLoaded", function () {
  showTask();

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    event.target.reset();
  });
});
