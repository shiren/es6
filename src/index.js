import '../assets/css/common.css';
import '../assets/css/example.css';

export class HelloWorld {
  constructor(element) {
    this.inputElement = element.querySelector('input');
    this.buttonElement = element.querySelector('button');
    this.messageElement = element.querySelector('#message');
    this.inputElement.value = 'ES6';
    this.addEvent();
  }

  addEvent() {
    this.buttonElement.addEventListener('click', this.announceMessage.bind(this));
  }

  announceMessage() {
    const name = this.inputElement.value;
    const message = `Hello! ${name}!`;
    this.messageElement.innerHTML = message;
  }
}

if (document.getElementById('hello-world-control')) {
  window.helloWorld = new HelloWorld(document.getElementById('hello-world-control'));
}
