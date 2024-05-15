document.addEventListener("DOMContentLoaded", function() {
    // Get the lesson number from local storage
    var completedLesson = localStorage.getItem("completedLesson");
    var completedLesson1 = localStorage.getItem("completedLesson1");
    var completedLesson2 = localStorage.getItem("completedLesson2");
    var completedLesson4 = localStorage.getItem("completedLesson4");
    var completedLesson5 = localStorage.getItem("completedLesson5");
    var completedLesson6 = localStorage.getItem("completedLesson6");
    // If a lesson is completed, mark the corresponding navigation item as completed
    var navItems = document.querySelectorAll("nav ul li");
    if (completedLesson) {
        navItems[completedLesson].classList.add("completed");
    }
    if (completedLesson1) {
        navItems[completedLesson1].classList.add("completed");
    }
    if (completedLesson2) {
        navItems[completedLesson2].classList.add("completed");
    }
    if (completedLesson5) {
        navItems[completedLesson5].classList.add("completed");
    }
    if (completedLesson4) {
        navItems[completedLesson4].classList.add("completed");
    }
    if (completedLesson6) {
        navItems[completedLesson6].classList.add("completed");
    }
});


   

    // If a lesson is completed, mark the corresponding navigation item as completed
   
