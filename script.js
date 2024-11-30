const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("doe-list");

function addTask() {
    if (inputBox.value === '') {
        alert("Mohon Input Sesuatu...");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; 
        span.classList.add("delete");
        li.appendChild(span);
    }

    inputBox.value = ""; 
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checklist");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
