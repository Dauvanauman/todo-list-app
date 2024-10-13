let input_text = document.querySelector(".input-container input")
let list_container = document.querySelector(".list-container");
let listitem = document.querySelectorAll("li")
let delete_buttons = document.querySelectorAll(".delete");



//****/ existing list item code 
document.querySelectorAll(".alllist li").forEach((listItem) => {
    const span = listItem.querySelector(".text");
    const editButton = listItem.querySelector(".edit");
    const deleteButton = listItem.querySelector(".delete");

    // Add edit functionality
    editButton.addEventListener("click", () => {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = span.innerText;
        editInput.classList.add("edit-input");

        // Replace the span with the input field
        listItem.replaceChild(editInput, span);

        // Focus on the input for easy editing
        editInput.focus();

        // Save on Enter key press
        editInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                span.innerText = editInput.value;
                listItem.replaceChild(span, editInput);
            }
        });

        // Save on blur (click outside)
        editInput.addEventListener("blur", () => {
            span.innerText = editInput.value;
            listItem.replaceChild(span, editInput);
        });
    });

    // Add delete functionality
    deleteButton.addEventListener("click", () => {
        listItem.remove();
        if (document.querySelectorAll(".alllist li").length === 0) {
            const newInput = document.createElement("input");
            newInput.classList.add("new-input")
            newInput.type = "text";
            newInput.value = "Ooops! List is empty";
            document.querySelector(".list-container").append(newInput);
        }
    });
});


// dynamicaly list item code 
input_text.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let new_list = document.createElement("li");
        let new_span = document.createElement("span");
        let new_button1 = document.createElement("button");
        let new_button2 = document.createElement("button");

        // Set up the classes for styling
        new_span.classList.add("text");
        new_button1.classList.add("edit");
        new_button2.classList.add("delete");

        // Set initial text for the span and buttons
        new_span.innerText = input_text.value;
        new_button1.innerText = "✏️";
        new_button2.innerText = "🗑️";

        // Append elements in the correct order
        new_list.append(new_span);
        new_list.append(new_button1);
        new_list.append(new_button2);

        // Append the new list item to the .alllist container
        document.querySelector(".alllist").append(new_list);

        // Add delete button functionality
        new_button2.addEventListener("click", () => {
            new_list.remove();
        });

        // Add edit button functionality
        new_button1.addEventListener("click", () => {
            // Create a new input element
            let edit_input = document.createElement("input");
            edit_input.type = "text";
            edit_input.value = new_span.innerText;
            edit_input.classList.add("edit-input");

            // Replace the span with the input field
            new_list.replaceChild(edit_input, new_span);

            // Focus on the input for easy editing
            edit_input.focus();

            // Update the span when the user presses Enter or blurs (clicks outside)
            edit_input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    new_span.innerText = edit_input.value;
                    new_list.replaceChild(new_span, edit_input); // Replace input with updated span
                }
            });

            edit_input.addEventListener("blur", () => {
                new_span.innerText = edit_input.value;
                new_list.replaceChild(new_span, edit_input); // Replace input with updated span
            });
        });

        // Clear input field after adding
        input_text.value = "";
    }
});
