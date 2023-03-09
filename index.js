const bd=document.body;
const r_button=document.querySelector("#red");
const g_button=document.querySelector("#green");
const b_button=document.querySelector("#blue");
const rgbvalue=document.querySelector("#rgb_value");
r_button.addEventListener("input",()=>{
  const r=document.querySelector("#red").value;
const g=document.querySelector("#green").value;
const b=document.querySelector("#blue").value;

 const col=`rgb(${r},${g},${b})`;

  bd.style.background=col;
rgbvalue.value=col;
});
g_button.addEventListener("input",()=>{
  const r=document.querySelector("#red").value;
const g=document.querySelector("#green").value;
const b=document.querySelector("#blue").value;

 const col=`rgb(${r},${g},${b})`;
 
  bd.style.background=col;
  rgbvalue.value=col;
});
b_button.addEventListener("input",()=>{
  const r=document.querySelector("#red").value;
const g=document.querySelector("#green").value;
const b=document.querySelector("#blue").value;

 const col=`rgb(${r},${g},${b})`;
  bd.style.background=col;
  rgbvalue.value=col;
});