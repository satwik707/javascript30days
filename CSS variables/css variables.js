const inputs=document.querySelectorAll('.controls input');  //take all the inputs ie base blur and spacing
function update() 
{
  console.log(this);  //as input was passed in as paramenter so this will give the input div tha has been  passed to the function
 const suffix=this.dataset.sizing||'';  //we need the suffix ie px in case of blur and spacing or else '' in case of base  
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);  //change property 
}
inputs.forEach(input=>input.addEventListener('change',update));   //use foreach to loop through all the inputs and pass the particular input to the function which has "change"
inputs.forEach(input=>input.addEventListener('mousemove',update));
