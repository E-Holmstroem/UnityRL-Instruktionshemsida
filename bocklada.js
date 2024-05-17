        document.addEventListener("DOMContentLoaded", function() {
            // Get all paragraphs containing instructions
            var instructions = document.querySelectorAll("#instructions p");
            var checkboxes = [];
    
            // Retrieve stored checkbox states
            for (var i = 0; i < instructions.length; i++) {
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = "step-" + (i + 1);
                checkbox.checked = localStorage.getItem("step-" + (i + 1)) === "true"; // Check if stored value is "true"
                instructions[i].parentNode.insertBefore(checkbox, instructions[i]);
                instructions[i].parentNode.insertBefore(document.createElement("br"), instructions[i]); // Add line break
    
                checkboxes.push(checkbox);
    
                // Apply completed class to instructions with checked checkboxes
                if (checkbox.checked) {
                    instructions[i].classList.add("completed");
                }
    
                // Add event listener to update class when checkbox state changes
                checkbox.addEventListener("change", createChangeListener(instructions[i], checkbox));
            }
    
            function createChangeListener(instruction, checkbox) {
                return function() {
                    if (checkbox.checked) {
                        instruction.classList.add("completed");
                    } else {
                        instruction.classList.remove("completed");
                    }
                    localStorage.setItem(checkbox.id, checkbox.checked); // Store checkbox state
                    checkAllChecked();
                };
            }
    
            function checkAllChecked() {
                var allChecked = checkboxes.every(function(checkbox) {
                    return checkbox.checked;
                });
    
                if (allChecked) {
                    alert("Nu borde du ha all fungerande programvara");
                    localStorage.setItem("completedLesson", 3); // Change '3' to the completed lesson number
                    window.location.href = "../index.html";
                }
            }
        });
    