
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input',(event)=>{
  const botonClick = document.getElementById('boton-visualizar');
  botonClick.addEventListener('click', ()=> {
    const paragraph = document.querySelector('.colorHexadecimal');
    const card = document.querySelector('.card');
    paragraph.textContent = event.target.value;
    card.style.backgroundColor = event.target.value;
  })
})




/*
function actualizar(event){
  const colorTitle = document.querySelector('.color');
  colorTitle.textContent = event.target.value;
}
*/
