const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-icon"; // Optional: Add a class for styling if needed
    inputbox.appendChild(img);
    notesContainer.appendChild(inputbox);
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter" && document.activeElement.classList.contains("input-box")) {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
