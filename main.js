const elementColorPicker = document.getElementById('colorPicker');
const elementBtn = document.querySelector('.btn-primary');

  elementColorPicker.addEventListener('input', (event)=> {
    elementBtn.addEventListener('click', () => {
      const colorTitle = document.querySelector('.color');
      const colorTable = document.querySelector('.colorTable');
      colorTitle.textContent = event.target.value;
      colorTable.style.backgroundColor = event.target.value;
    });
});

/*
function actualizar(event){
  const colorTitle = document.querySelector('.color');
  colorTitle.textContent = event.target.value;
}
*/
