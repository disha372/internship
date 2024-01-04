// Fetch tasks from backend and display them
function fetchTasks() {
    // Fetch tasks from backend API using fetch or AJAX
    // Display tasks in the #taskList div
}

// Add new task using form submission
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    // Make POST request to backend API to add task
    // Handle response and update UI
});
