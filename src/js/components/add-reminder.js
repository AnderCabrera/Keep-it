export default class AddReminder {
  constructor() {
    this.title = document.getElementById('title-input');
    this.description = document.getElementById('description-input');
    this.sumbitButton = document.getElementById('submit-btn');
  }

  onClick(callback) {
    this.sumbitButton.onclick = () => {
      if (this.title.value === '' || this.description.value === '') {
        alert('insert title & desc');
        return;
      }

      callback(this.title.value, this.description.value);

      this.title.value = '';
      this.description.value = '';
    };
  }
}
