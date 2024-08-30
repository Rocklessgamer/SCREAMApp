document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById('form-container');

    const config = JSON.parse(config_data);

    const titleElement = document.createElement('h2');
    titleElement.textContent = config.title;
    formContainer.appendChild(titleElement);

    // Iterate through prematch, auton, teleop, endgame, and postmatch to create the form fields
    config.prematch.forEach(item => {
        const label = document.createElement('label');
        label.textContent = item.name;
        formContainer.appendChild(label);

        let input;
        switch(item.type) {
            case 'scouter':
            case 'event':
            case 'team':
            case 'match':
                input = document.createElement('input');
                input.type = 'text';
                input.name = item.code;
                if (item.required === "true") input.required = true;
                if (item.size) input.size = item.size;
                if (item.maxSize) input.maxLength = item.maxSize;
                break;
            case 'level':
            case 'robot':
                input = document.createElement('select');
                input.name = item.code;
                for (let [value, text] of Object.entries(item.choices)) {
                    const option = document.createElement('option');
                    option.value = value;
                    option.innerHTML = text;
                    input.appendChild(option);
                }
                if (item.required === "true") input.required = true;
                input.value = item.defaultValue;
                break;
            // Add more cases for other input types like 'clickable_image', 'bool', 'counter', etc.
        }

        formContainer.appendChild(input);
    });

    // Add logic for other sections like auton, teleop, etc.

    // Finally, add a submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    formContainer.appendChild(submitButton);
});
