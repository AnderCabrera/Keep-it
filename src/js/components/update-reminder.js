export default class UpdateReminder {
  constructor() {
    this.modalMain = document.getElementById('update-modal');
    this.title = document.getElementById('title-modal');
    this.description = document.getElementById('description-modal');
    this.cancelBtn = document.getElementById('cancel-button');
    this.continueBtn = document.getElementById('continue-button');
  }

  onClick(callback) {
    this.continueBtn.onclick = () => {
      if (this.title.value === '' || this.description.value === '') {
        alert('insert something')
      }

      callback(this.title.value, this.description.value);

      this.modalMain.style.display = 'none';
    };
  }

  showModal() {
    this.modalMain.style.display = 'block';
  }

  unShowModal() {
    this.cancelBtn.onclick = () => {
      this.modalMain.style.display = 'none';
    }
  }
}
