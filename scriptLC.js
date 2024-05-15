document.getElementById("integerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the integer input value
    var integer = parseInt(document.getElementById("integerInput").value);

    localStorage.setItem("completedLesson" + integer, integer); 

    window.location.href = "../index.html";
});
