window.onload = function() {
  var board = document.querySelector('.board');
  board.addEventListener('click', addSimbol);
};

var centinel = false;
function addSimbol (event){
    event.target.style.backgroundColor = 'red';
};
