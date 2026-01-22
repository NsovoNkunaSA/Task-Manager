// Task Manager Frontend App
// We'll implement this step by step

console.log('Task Manager Frontend Loaded');

// Global variables - will use later
let taskListInstance = null;
let apiBaseUrl = 'http://localhost:3000';

// System initialization
function initializeSystem() {
    console.log('Initializing system...');
    updateStatus('System initialized. Ready to start building.', 'ready');
    
    // Enable buttons as we implement features
    // For now, all disabled
}

// Status updater
function updateStatus(message, type = 'info') {
    const statusDiv = document.getElementById('systemStatus');
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    
    // Also log to output
    logToOutput(`[STATUS] ${message}`);
}

// Output logger
function logToOutput(message) {
    const outputDiv = document.getElementById('output');
    const timestamp = new Date().toLocaleTimeString();
    outputDiv.innerHTML += `[${timestamp}] ${message}\n`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Clear output
function clearOutput() {
    document.getElementById('output').innerHTML = '';
    logToOutput('Output cleared.');
}

// Test functions - will implement these step by step

function testTaskClass() {
    logToOutput('Testing Task class...');
    // Will implement when we build the Task class
}

function createSampleTask() {
    logToOutput('Creating sample task...');
    // Will implement when we build the Task class
}

function testTaskListClass() {
    logToOutput('Testing TaskList class...');
    // Will implement when we build the TaskList class
}

function addTaskToList() {
    logToOutput('Adding task to list...');
    // Will implement when we build the TaskList class
}

function testAPIConnection() {
    logToOutput('Testing API connection...');
    // Will implement when we build the API
}

function createTaskViaAPI() {
    logToOutput('Creating task via API...');
    // Will implement when we build the API
}

function getTasksViaAPI() {
    logToOutput('Getting tasks via API...');
    // Will implement when we build the API
}

// Add new task from form inputs
function addNewTask() {
    const titleInput = document.getElementById('taskTitle');
    const descInput = document.getElementById('taskDesc');
    const prioritySelect = document.getElementById('taskPriority');
    
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    const priority = prioritySelect.value;
    
    if (!title) {
        updateStatus('Please enter a task title', 'not-ready');
        logToOutput('ERROR: Task title cannot be empty');
        return;
    }
    
    logToOutput(`Adding task: "${title}" (Priority: ${priority})`);
    logToOutput(`Description: ${description || 'None'}`);
    
    // Clear inputs after adding
    titleInput.value = '';
    descInput.value = '';
    prioritySelect.value = 'medium';
    
    updateStatus('Task added successfully!', 'ready');
}

// View all tasks
function viewAllTasks() {
    logToOutput('Fetching all tasks...');
    logToOutput('--- All Tasks ---');
    logToOutput('Task 1: Sample Task (Priority: High)');
    logToOutput('Task 2: Another Task (Priority: Medium)');
    logToOutput('--- End of Tasks ---');
    updateStatus('Tasks displayed in output', 'ready');
}

// Refresh tasks
function refreshTasks() {
    logToOutput('Refreshing tasks...');
    updateStatus('Tasks refreshed', 'ready');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeSystem);