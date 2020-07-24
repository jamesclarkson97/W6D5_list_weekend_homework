document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button');
    button.addEventListener('click', handleButtonClick);
  
    const textInput = document.querySelector('#input');
    textInput.addEventListener('input', handleInput);
  
    const select = document.querySelector('#select');
    select.addEventListener('change', handleSelectChange);
  
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });