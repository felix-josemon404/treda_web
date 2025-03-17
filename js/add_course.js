document.getElementById('nextStep').addEventListener('click', function () {
    document.getElementById('courseForm').classList.add('hidden');
    document.getElementById('moduleSection').classList.remove('hidden');
});

document.getElementById('addModuleBtn').addEventListener('click', function () {
    const moduleContainer = document.getElementById('modulesContainer');

    const moduleDiv = document.createElement('div');
    moduleDiv.classList.add('module-entry');

    moduleDiv.innerHTML = `
        <label for="moduleTitle">Module Title:</label>
        <input type="text" name="moduleTitle" required>

        <label for="moduleType">Module Type:</label>
        <select name="moduleType" class="moduleType" onchange="toggleContentInput(this)" required>
            <option value="">Select Type</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
        </select>

        <div class="module-content"></div>

        <button type="button" class="remove-btn" onclick="removeModule(this)">Remove Module</button>
    `;

    moduleContainer.appendChild(moduleDiv);
});

// Toggle content input based on selected module type
function toggleContentInput(selectElement) {
    const contentDiv = selectElement.parentElement.querySelector('.module-content');

    if (selectElement.value === 'text') {
        contentDiv.innerHTML = `
            <label for="textContent">Text Content:</label>
            <textarea name="textContent" rows="3" required></textarea>
        `;
    } else if (selectElement.value === 'video') {
        contentDiv.innerHTML = `
            <label for="videoContent">Upload Video:</label>
            <input type="file" name="videoContent" accept="video/*" required>
        `;
    } else {
        contentDiv.innerHTML = ''; // Clear if no type selected
    }
}

// Remove a module entry
function removeModule(button) {
    button.parentElement.remove();
}

document.getElementById('finishCourseBtn').addEventListener('click', function () {
    alert('Course created successfully!');
});
