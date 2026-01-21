/**
 * Manages a collection of Task objects
 */
class TaskList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }
  
  // Factory method - creates Task from data
  static createTaskFromData(data) {
    const Task = require('../models/task');
    return new Task(data.id, data.title, data.description, data.completed, data.priority, data.dueDate);
  }
  
  // CRUD operations
  
  // Adds a new task to the list
  addTask(taskData) {
    const Task = require('../models/task');
    const newTask = new Task(this.nextId++, taskData.title, taskData.description, false, taskData.priority, taskData.dueDate);
    this.tasks.push(newTask);
    return newTask;
  }
  
  
  getTask(id) {
    return this.tasks.find(task => task.id === id) || null;
  }
  
  
  getAllTasks() {
    return this.tasks.map(task => task.toJSON());
  }
  
  getCompletedTasks() {
    return this.tasks.filter(task => task.completed).map(task => task.toJSON());
  }
  
  
  getPendingTasks() {
    return this.tasks.filter(task => !task.completed).map(task => task.toJSON());
  }
  
 
  getTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority).map(task => task.toJSON());
  }
  

  updateTask(id, updates) {
    const task = this.getTask(id);
    if (!task) return null;
    if (updates.title) task._title = updates.title;
    if (updates.description) task._description = updates.description;
    if (updates.priority) task._priority = updates.priority;
    if (updates.completed !== undefined) task._completed = updates.completed;
    task._updatedAt = new Date();
    return task;
  }
  
  // Deletes a task by ID
  deleteTask(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
  
  
  
  
  getStatistics() {
    return {
      total: this.tasks.length,
      completed: this.tasks.filter(t => t.completed).length,
      pending: this.tasks.filter(t => !t.completed).length,
      overdue: this.tasks.filter(t => t.isOverdue()).length
    };
  }
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = TaskList;
}