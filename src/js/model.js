export default class Model {
  constructor() {
    this.model = null;
    this.reminders = [];
    this.id = 1;
  }

  setModel(model) {
    this.model = model;
  }

  addReminder(title, description) {
    let reminder = {
      id: this.id++,
      title,
      description
    }

    this.reminders.push(reminder);
    console.log(this.reminders);
    return {...reminder}
  }

  findIndex(id) {
    return this.reminders.findIndex(reminder => reminder.id === id)
  }

  deleteReminder(id) {
    let index = this.findIndex(id);
    this.reminders.splice(index, 1);
    console.log(this.reminders);
  }

  updateReminder(id, title, description) {
    let index = this.findIndex(id);

    this.reminders[index].title = title;
    this.reminders[index].description = description;

    console.log(this.reminders);
    console.log(JSON.stringify(this.reminders));
  }

  getReminders() {
    return this.reminders;
  }
}
