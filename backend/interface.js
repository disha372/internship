// Fetch tasks from the backend
async function fetchTasks() {
    try {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        // Update UI with tasks
    } catch (error) {
        // Handle error
    }
}

// Add new task
async function addTask(newTask) {
    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });
        // Update UI with the new task
    } catch (error) {
        // Handle error
    }
}

// Update existing task
async function updateTask(taskId, updatedTask) {
    try {
        const response = await fetch('/api/tasks/${taskId}', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        });
        // Update UI with the updated task
    } catch (error) {
        // Handle error
    }
}

// Delete task
async function deleteTask(taskId) {
    try {
        const response = await fetch('/api/tasks/${taskId}', {
            method: 'DELETE',
        });
        // Remove task from UI
    } catch (error) {
        // Handle error
    }
}

// Mark completion of task
async function markCompletion(taskId) {
    try {
        const response = await fetch('/api/tasks/${taskId}/complete', {
            method: 'PATCH',
        });
        // Update UI to reflect completion
    } catch (error) {
        // Handle error
    }
}

// Initial load
fetchTasks();