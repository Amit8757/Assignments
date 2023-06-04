const listItemArray = [
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"
  ];
  
  let counter = 0;
  
  function addListItem() {
    const list = document.getElementById('list');
  
    if (counter < listItemArray.length) {
      const newItem = document.createElement('li');
      newItem.textContent = listItemArray[counter];
      list.appendChild(newItem);
      counter++;
    } else {
      const message = document.createElement('p');
      message.textContent = 'All items have been added.';
      list.appendChild(message);
    }
  }
  
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addListItem);
  