class Task {
  constructor(id, title, description = '', completed = false, priority = 'medium', dueDate = null) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._completed = completed;
    this._priority = priority;
    this._dueDate = dueDate;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }
  
  get id() { return this._id; }
  get title() { return this._title; }
  get completed() { return this._completed; }
  get priority() { return this._priority; }
  
  markComplete() {
    this._completed = true;
    this._updatedAt = new Date();
  }
  
  markIncomplete() {
    this._completed = false;
    this._updatedAt = new Date();
  }
  
  isOverdue() {
    if (!this._dueDate) return false;
    return new Date() > new Date(this._dueDate) && !this._completed;
  }
  
  toJSON() {
    return {
      id: this._id,
      title: this._title,
      description: this._description,
      completed: this._completed,
      priority: this._priority,
      dueDate: this._dueDate,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      isOverdue: this.isOverdue()
    };
  }
}

function addTask(tasks, id, title, description = '', priority = 'medium', dueDate = null) {
  const newTask = new Task(id, title, description, false, priority, dueDate);
  tasks.push(newTask);
  return newTask;
}

function getTask(tasks, id) {
  return tasks.find(task => task.id === id) || null;
}

function getAllTasks(tasks) {
  return tasks.map(task => task.toJSON());
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Task;
  module.exports.addTask = addTask;
  module.exports.getTask = getTask;
  module.exports.getAllTasks = getAllTasks;
}