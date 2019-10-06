function backChange = (){
  const buttons = document.querySelectorAll('nav ul');
  const color = document.querySelector('nav');
  
  buttons.addeventlistener('click', ()=>{
    color.style.backgroundColor= ('blue')
  });
  backChange();