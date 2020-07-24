document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelector('#delete');
    deleteButton.addEventListener('click', handleButtonClick);
  
    // const textInput = document.querySelector('#input');
    // textInput.addEventListener('input', handleInput);
  
    // const select = document.querySelector('#select');
    // select.addEventListener('change', handleSelectChange);
  
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });

  const handleButtonClick = function () {
    const result = document.querySelector('li');
    result.remove('*');
  };
  
//   const handleInput = function (event) {
//     const resultParagraph = document.querySelector('#input-result');
//     resultParagraph.textContent = `You typed: ${event.target.value}`;
//   };
  
//   const handleSelectChange = function (event) {
//     const resultParagraph = document.querySelector('#select-result');
//     resultParagraph.textContent = `You went with: "${event.target.value}".`;
//   };
  
  const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultParagraph = document.createElement('li');
    resultParagraph.textContent = `${event.target.name.value} is a cause of
      ${event.target.category.value} anaemia.`;
    
    const list = document.querySelector('ul');
    list.appendChild(resultParagraph);
    console.log(list);
  };

    