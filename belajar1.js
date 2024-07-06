let isMoved = false;
let isBgChanged = false;

  function moveButton() {
    const button = document.getElementById('myButton');
    const bg = document.querySelector('.bg');
    if (isMoved) {
      
      button.style.left = '10px';
      button.style.backgroundColor = 'black';
    } else {
     
      button.style.left = '525px';
      button.style.backgroundColor = 'white';
    }
    isMoved = !isMoved;
      
    if (isBgChanged){
      bg.style.backgroundColor = 'black';   
    }
    else{
      bg.style.backgroundColor = 'white';
    }
    isBgChanged = !isBgChanged;
  }
    