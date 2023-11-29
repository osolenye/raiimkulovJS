window.onload = function() {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');
  
    let posX = 0; 
    let posY = 0; 
  
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
  
    
    function moveRight() {
      const interval = setInterval(() => {
        if (posX >= parentWidth - childBlock.offsetWidth) {
          clearInterval(interval);
          moveDown(); 
        } else {
          posX += 1;
          childBlock.style.left = posX + 'px';
        }
      }, 10); 
    }
  
   
    function moveDown() {
      const interval = setInterval(() => {
        if (posY >= parentHeight - childBlock.offsetHeight) {
          clearInterval(interval);
        } else {
          posY += 1; 
          childBlock.style.top = posY + 'px';
        }
      }, 10); 
    }
  
    childBlock.style.left = posX + 'px';
    childBlock.style.top = posY + 'px';
  
    setTimeout(() => {
      moveRight();
    }, 1000); 

    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');
  
    gmailButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      const enteredEmail = gmailInput.value.trim(); 
  
      const validGmail = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;
  
      if (validGmail.test(enteredEmail)) {
        gmailResult.textContent = 'правильный';
      } else {
        gmailResult.textContent = 'неправильный';
      }
    });
  };
  
