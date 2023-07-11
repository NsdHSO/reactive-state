/* eslint-env es6 */

class Button {
  constructor(name) {
    this.name = name;
    this.button = document.createElement('button');
    this.button.innerText = name;
    this.button.addEventListener('click', this.click.bind(this));
    this.renderer(this.button);
  }

  click() {
    console.log('nda');
  }

  renderer(element) {
    console.log(element);
    document.body.appendChild(element);
    console.log('renderer ');
  }
}

class Input {
  constructor(elementId) {
    this.element = document.createElement('input');
    this.element.id = elementId;
    this.value = '';

    // Bind the event listener to the input element
    this.element.addEventListener('input', this.handleInput.bind(this));
    this.render();
  }

  handleInput(event) {
    this.value = event.target.value;
    console.log('Input value:', this.value);
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
    this.element.value = newValue;
  }

  clear() {
    this.setValue('');
  }

  render() {
    document.body.appendChild(this.element);
  }
}


const cleanerWord = (c) => c.replace(/ +/g, '')
const filterWord = (arr) => Array.from(arr).filter(char => char !== 'a')
const joinedWord= (v)=> filterWord(v).join('')
console.log(cleanerWord(joinedWord(['dasdd','dasdasd','dasdasd', 'dasdasd'])));