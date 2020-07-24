document.addEventListener('DOMContentLoaded', () => {
    const deleteFirstButton = document.querySelector('#delete_first');
    deleteFirstButton.addEventListener('click', handleFirstButtonClick);

    const deleteLastButton = document.querySelector('#delete_last');
    deleteLastButton.addEventListener('click', handleLastButtonClick);

    const deleteAllButton = document.querySelector('#delete_all');
    deleteAllButton.addEventListener('click', handleAllButtonClick);
  
    // const textInput = document.querySelector('#input');
    // textInput.addEventListener('input', handleInput);
  
    // const select = document.querySelector('#select');
    // select.addEventListener('change', handleSelectChange);
  
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });

  const handleFirstButtonClick = function () {
    const result = document.querySelector('li');
    result.remove();
  };
  
  const handleLastButtonClick = function () {
    const result = document.querySelector('#causes');
    result.removeChild(result.lastChild);
  };

  const handleAllButtonClick = function () {
    const result = document.querySelector('#causes');
    while (result.firstChild) {
        result.removeChild(result.lastChild);
      };
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
    // resultParagraph.id = `${event.target.name.value} ${event.target.category.value}`

    const list = document.querySelector('#causes');
    list.appendChild(resultParagraph);
  };

    