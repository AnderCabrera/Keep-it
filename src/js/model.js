export default class Model {
  constructor() {
    this.model = null;
    this.reminders = JSON.parse(localStorage.getItem('reminders'));

    if (!this.reminders || this.reminders.length < 1) {
      this.reminders = [{
        id: 0,
        title: "Title",
        description: "Decription"
      }]
      this.id = 1;
    } else {
      this.id = this.reminders[this.reminders.length - 1].id + 1;
    }
  }

  setModel(model) {
    this.model = model;
  }

  save() {
    localStorage.setItem('reminders', JSON.stringify(this.reminders));
  }

  addReminder(title, description) {
    let reminder = {
      id: this.id++,
      title,
      description,
    };

    this.reminders.push(reminder);
    this.save();
    console.log(this.reminders);
    return { ...reminder };
  }

  findIndex(id) {
    return this.reminders.findIndex((reminder) => reminder.id === id);
  }

  deleteReminder(id) {
    let index = this.findIndex(id);
    this.reminders.splice(index, 1);
    this.save();
    console.log(this.reminders);
  }

  updateReminder(id, title, description) {
    let index = this.findIndex(id);

    this.reminders[index].title = title;
    this.reminders[index].description = description;

    this.save();
    console.log(this.reminders);
  }
}
