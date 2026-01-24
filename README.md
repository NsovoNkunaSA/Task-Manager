# Task Manager - OOP Learning Project

A full-stack task management application built with Object-Oriented Programming (OOP) principles in JavaScript. This project demonstrates core OOP concepts including classes, encapsulation, getters/setters, and separation of concerns between frontend and backend.

## 📋 Project Overview

Task Manager is a web-based application that allows users to create, view, update, and delete tasks. The project is organized into a frontend (client-side UI) and backend (API server) architecture.

**Key Features:**
- ✅ Create new tasks with title, description, and priority levels
- 📊 View all tasks with filtering options
- 🔄 Mark tasks as completed or pending
- 🎯 Filter tasks by priority (Low, Medium, High)
- 📈 Get task statistics (total, completed, pending, overdue)
- 🏗️ RESTful API for task management

## 🗂️ Project Structure

```
Task-Manager/
├── index.html                 # Main HTML file - UI structure
├── README.md                  # This file
├── Frontend/
│   └── app.js                # Frontend JavaScript - UI logic and user interactions
└── Backend/
    ├── server.js             # Express.js server - API endpoints
    ├── core/
    │   └── tasklist.js       # TaskList class - manages collection of tasks
    ├── models/
    │   └── task.js           # Task class - individual task object
    └── utils/
        └── idGenerator.js    # IdGenerator utility - generates unique IDs
```

## 🏗️ Architecture

### Frontend (`Frontend/app.js` & `index.html`)
- Handles user interface and interactions
- Manages form inputs (task title, description, priority)
- Displays output and status messages
- Functions:
  - `addNewTask()` - Creates a new task
  - `viewAllTasks()` - Displays all tasks
  - `refreshTasks()` - Refreshes task list
  - `updateStatus()` - Updates system status display
  - `logToOutput()` - Logs messages to output panel

### Backend (`Backend/server.js`)
- Express.js server running on port 3000
- Provides RESTful API endpoints
- Uses in-memory storage (TaskList instance)
- Endpoints:
  - `GET /` - Welcome message
  - `POST /api/tasks` - Create new task
  - `GET /api/tasks` - Get all tasks
  - `GET /api/tasks/:id` - Get specific task
  - `PUT /api/tasks/:id` - Update task
  - `DELETE /api/tasks/:id` - Delete task
  - `GET /api/statistics` - Get task statistics
  - `GET /api/tasks/filter/completed` - Get completed tasks
  - `GET /api/tasks/filter/pending` - Get pending tasks

## 🎓 OOP Concepts Demonstrated

### 1. **Classes**
- `Task` - Represents a single task with properties and methods
- `TaskList` - Manages a collection of Task objects

### 2. **Encapsulation**
- Private properties using underscore convention (`_id`, `_title`, etc.)
- Getter methods to control property access
- `toJSON()` method for external data representation

### 3. **Getters & Setters**
```javascript
get id() { return this._id; }      // Read-only access
get completed() { return this._completed; }
```

### 4. **Methods**
- Instance methods: `markComplete()`, `markIncomplete()`, `isOverdue()`
- Static methods: `createTaskFromData()`
- Utility methods: `toJSON()`, `getStatistics()`

### 5. **Separation of Concerns**
- Models handle data logic (Task, TaskList)
- Server handles API logic (routes, endpoints)
- Frontend handles UI logic (display, user interaction)

## 📦 Classes & Methods

### Task Class (`Backend/models/task.js`)

**Constructor:**
```javascript
new Task(id, title, description = '', completed = false, priority = 'medium', dueDate = null)
```

**Getters:**
- `id` - Returns task ID
- `title` - Returns task title
- `completed` - Returns completion status
- `priority` - Returns priority level

**Methods:**
- `markComplete()` - Marks task as completed
- `markIncomplete()` - Marks task as incomplete
- `isOverdue()` - Checks if task is overdue
- `toJSON()` - Converts task to JSON format

### TaskList Class (`Backend/core/tasklist.js`)

**CRUD Operations:**
- `addTask(taskData)` - Creates and adds new task
- `getTask(id)` - Retrieves specific task
- `getAllTasks()` - Returns all tasks as JSON
- `updateTask(id, updates)` - Updates task properties
- `deleteTask(id)` - Removes task from list

**Filter Methods:**
- `getCompletedTasks()` - Returns only completed tasks
- `getPendingTasks()` - Returns only pending tasks
- `getTasksByPriority(priority)` - Filters by priority

**Utility Methods:**
- `getStatistics()` - Returns task statistics
- `createTaskFromData(data)` - Factory method for creating tasks

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- A modern web browser

### Installation

1. **Clone or download the project**
```bash
cd Task-Manager
```

2. **Install dependencies** (for backend)
```bash
npm init -y
npm install express
```

3. **Start the backend server**
```bash
node Backend/server.js
```

The server will run at `http://localhost:3000`

4. **Open the frontend**
Open `index.html` in your web browser

## 💻 Usage

### Adding a Task
1. Enter task title in the "Task title" input field
2. (Optional) Enter description
3. Select priority level (Low, Medium, High)
4. Click "Add Task" button

### Viewing Tasks
1. Click "Show All Tasks" button
2. Tasks will appear in the Output panel

### Refreshing Tasks
1. Click "Refresh" button to reload the task list

### Clearing Output
1. Click "Clear" button to clear the output panel

## 📝 API Examples

### Create a Task
```bash
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "title": "Learn OOP",
  "description": "Study classes and encapsulation",
  "priority": "high"
}
```

### Get All Tasks
```bash
GET http://localhost:3000/api/tasks
```

### Update a Task
```bash
PUT http://localhost:3000/api/tasks/1
Content-Type: application/json

{
  "completed": true,
  "priority": "medium"
}
```

### Delete a Task
```bash
DELETE http://localhost:3000/api/tasks/1
```

## 🔍 Code Documentation

All files are thoroughly commented with:
- **JSDoc comments** for functions and methods
- **@param tags** explaining parameters and types
- **@returns tags** explaining return values
- **Inline comments** explaining logic and concepts

Example:
```javascript
/**
 * Adds a new task to the list
 * Automatically assigns a unique ID
 * @param {Object} taskData - Object containing title, description, priority
 * @returns {Task} The newly created task object
 */
addTask(taskData) { ... }
```

## 🧪 Testing

You can test the application by:

1. **Frontend Testing:**
   - Add tasks via the UI
   - Verify tasks appear in output
   - Clear output and refresh

2. **Backend Testing:**
   - Use Postman or curl to test API endpoints
   - Verify CRUD operations work correctly
   - Check statistics endpoint

3. **Browser Console:**
   - Open DevTools (F12)
   - Check console for logs
   - Monitor network requests to /api/tasks

## 📚 Learning Outcomes

This project teaches:
- ✅ Class-based OOP in JavaScript
- ✅ Private properties and encapsulation
- ✅ Getter methods and property access control
- ✅ Factory methods and static methods
- ✅ RESTful API design
- ✅ Frontend-Backend separation
- ✅ CRUD operations
- ✅ Data filtering and transformation
- ✅ JSON serialization with `toJSON()`
- ✅ Error handling and validation

## 🔄 Data Flow

1. **User Input** → Frontend form captures task data
2. **Frontend Processing** → `addNewTask()` validates and prepares data
3. **API Call** → Frontend sends POST request to backend
4. **Backend Processing** → Server receives request, calls `TaskList.addTask()`
5. **Data Storage** → TaskList stores Task instance in memory
6. **Response** → Server returns JSON response via `toJSON()`
7. **UI Update** → Frontend displays success message in output panel

## 🛠️ Future Enhancements

Potential improvements to expand this project:
- Add database integration (MongoDB, PostgreSQL)
- Implement user authentication
- Add due date calculations and reminders
- Create task categories/tags
- Add task search functionality
- Implement task sorting (by priority, date, etc.)
- Add unit tests
- Create a more advanced UI with frameworks like React
- Add file persistence (save to JSON file)

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main UI structure and styling |
| `Frontend/app.js` | Client-side JavaScript logic |
| `Backend/server.js` | Express API server |
| `Backend/core/tasklist.js` | TaskList class for managing tasks |
| `Backend/models/task.js` | Task class definition |
| `Backend/utils/idGenerator.js` | Utility for generating IDs |

## 🎯 Key OOP Principles Used

1. **Encapsulation** - Private properties with public getters
2. **Abstraction** - Complex logic hidden behind simple interfaces
3. **Single Responsibility** - Each class has one clear purpose
4. **DRY (Don't Repeat Yourself)** - Reusable methods and functions
5. **Composition** - TaskList contains multiple Task objects




