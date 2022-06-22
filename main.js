const elementTitle = document.getElementById('titlePrimary')

elementTitle.style.color = 'black'
elementTitle.style.textAlign = 'center';
elementTitle.style.fontSize = '20px';
elementTitle.style.paddingTop = '30px';
elementTitle.style.fontFamily = 'Open Sans'

const elementColorPicker = document.getElementById('colorPicker')

elementColorPicker.style.background = 'white'
elementColorPicker.style.height = '36px'
elementColorPicker.style.width = '350px'
elementColorPicker.style.borderRadius = '4px'
elementColorPicker.style.borderWidth = '1px'
elementColorPicker.style.borderColor = 'black'

const elementDivColorPicker = document.querySelector('.ipt')

elementDivColorPicker.style.display = 'flex';
elementDivColorPicker.style.justifyContent = 'center';


const elementDivBtn = document.querySelector('.btn')

elementDivBtn.style.display = 'flex';
elementDivBtn.style.justifyContent = 'center';
elementDivBtn.style.paddingTop = '15px'

const elementBtn = document.querySelector('.btn-primary')

elementBtn.style.fontFamily = 'Open Sans';
elementBtn.style.fontSize = '20px';
elementBtn.style.color = 'white';
// elementBtn.style.backgroundColor = 'blue';
elementBtn.style.borderRadius = '8px';
elementBtn.style.width = '360px';
elementBtn.style.height = '45px'
const colorTitle = document.getElementById('color')


  elementColorPicker.addEventListener('input', (event)=> {
    elementBtn.addEventListener('click', () => {
      const colorTitle = document.querySelector('.color');
      const colorTable = document.querySelector('.colorTable')
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
