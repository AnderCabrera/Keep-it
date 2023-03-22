import AddReminder from './components/add-reminder.js';
import Model from './model.js';

export default class View {
  constructor() {
    this.view = null;
    this.title = document.getElementById('title-input');
    this.description = document.getElementById('description-input');
    this.addReminderBtn = new AddReminder();
    this.model = new Model();

    this.addReminderBtn.onClick((title, description) => this.addReminder(title, description));
  }

  setView(view) {
    this.view = view;
  }

  addReminder(title, description) {
    let reminder = this.model.addReminder(title, description);
    this.addCard(reminder);
  }

  addCard(reminder) {
    let main = document.getElementById('main');
    let card = `
    <div class="card" id=${reminder.id}>
      <h2 class="title" id="title">${reminder.title}</h2>
      <p class="description" id="description">${reminder.description}</p>
    </div>`;

    let temp = document.createElement('div');
    temp.innerHTML = card;

    main.appendChild(temp)
  }
}
