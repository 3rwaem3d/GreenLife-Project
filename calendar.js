let currentDate = new Date();

let monthYear = document.getElementById("monthYear");
let calendarDays = document.getElementById("calendarDays");

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let taskInput = document.getElementById("taskInput");
let taskType = document.getElementById("taskType");
let addTaskBtn = document.getElementById("addTaskBtn");

let selectedDay = null;


function showCalendar() {

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    let lastDay = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = currentDate.toLocaleString("en-US", {
        month: "long",
        year: "numeric"
    });

    calendarDays.innerHTML = "";


    for (let i = 0; i < firstDay; i++) {

        let empty = document.createElement("div");

        calendarDays.appendChild(empty);
    }


    for (let day = 1; day <= lastDay; day++) {

        let dayBox = document.createElement("div");

        dayBox.textContent = day;

        dayBox.addEventListener("click", function() {

            selectedDay = day;

            document.querySelectorAll(".calendar-days div").forEach(function(box) {
                box.classList.remove("selected");
            });

            dayBox.classList.add("selected");

        });

        calendarDays.appendChild(dayBox);
    }
}


prevBtn.addEventListener("click", function() {

    currentDate.setMonth(currentDate.getMonth() - 1);

    showCalendar();

});


nextBtn.addEventListener("click", function() {

    currentDate.setMonth(currentDate.getMonth() + 1);

    showCalendar();

});


addTaskBtn.addEventListener("click", function() {

    if (selectedDay === null) {

        alert("Please select a day first.");

        return;
    }

    if (taskInput.value === "") {

        alert("Please enter a task.");

        return;
    }

    let task = document.createElement("p");

task.textContent = taskType.value + ": " + taskInput.value;

task.className = "task";

let selectedBox = document.querySelector(".selected");

selectedBox.appendChild(task);

taskInput.value = "";

});


showCalendar();
