document.addEventListener('DOMContentLoaded', () => {
    const deleteFirstButton = document.querySelector('#delete_first');
    deleteFirstButton.addEventListener('click', handleFirstButtonClick);

    const deleteLastButton = document.querySelector('#delete_last');
    deleteLastButton.addEventListener('click', handleLastButtonClick);

    const deleteAllButton = document.querySelector('#delete_all');
    deleteAllButton.addEventListener('click', handleAllButtonClick);
  
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
  
  const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultParagraph = document.createElement('li');
    resultParagraph.textContent = `${event.target.name.value} is a cause of
      ${event.target.category.value} anaemia.`;
    
    const list = document.querySelector('#causes');
    list.appendChild(resultParagraph);
  };

    