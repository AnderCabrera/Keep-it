import Model from './model.js';
import AddReminder from './components/add-reminder.js';
import UpdateReminder from './components/update-reminder.js';

export default class View {
  constructor() {
    this.view = null;
    this.main = document.getElementById('main');
    this.title = document.getElementById('title-input');
    this.description = document.getElementById('description-input');
    this.model = new Model();
    this.addReminderBtn = new AddReminder();
    this.updateReminderBtn = new UpdateReminder();

    this.addReminderBtn.onClick((title, description) =>
      this.addReminder(title, description)
    );
  }

  setView(view) {
    this.view = view;
  }

  addReminder(title, description) {
    let reminder = this.model.addReminder(title, description);
    this.addCard(reminder);
  }

  deleteReminder(id) {
    this.model.deleteReminder(id);
    document.getElementById(id).remove();
  }

  addCard(reminder) {
    let card = document.createElement('div');
    card.innerHTML = `
      <h2 class="title" id="title">${reminder.title}</h2>
      <p class="description" id="description">${reminder.description}</p>
    `;

    card.setAttribute('class', 'card');
    card.setAttribute('id', reminder.id);

    // buttons container
    let buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('class', 'options-buttons');
    buttonsContainer.setAttribute('id', 'options-buttons');

    // update button
    let updateBtn = document.createElement('button');
    updateBtn.setAttribute('class', 'update-btn');
    updateBtn.setAttribute('id', 'update-btn');
    updateBtn.setAttribute('type', 'button');
    updateBtn.textContent = 'Update';
    updateBtn.onclick = () => {
      let card  = document.getElementById(`${reminder.id}`);
      this.updateReminderBtn.title.value = card.children[0].innerText;
      this.updateReminderBtn.description.value = card.children[1].innerText;

      this.updateReminderBtn.onClick((title, description) => {
        this.model.updateReminder(reminder.id, title, description);
        
        let card  = document.getElementById(`${reminder.id}`);
        card.children[0].innerText = title;
        card.children[1].innerText = description;
      })
      
      this.updateReminderBtn.showModal();
      this.updateReminderBtn.unShowModal();
    };

    // delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => this.deleteReminder(reminder.id);

    // insertion buttons to container
    buttonsContainer.appendChild(updateBtn);
    buttonsContainer.appendChild(deleteBtn);

    // insertion buttons container to div card
    card.appendChild(buttonsContainer);

    // inserting all to the parent div
    main.appendChild(card);
  }
}
