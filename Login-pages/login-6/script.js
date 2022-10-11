const labels=document.querySelectorAll('.form-control label');

labels.forEach(label => {
   label.innerHTML=label.innerText
   .split('')
   .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
   .join('');
});

const loadText=document.querySelector('.loading');
const container=document.querySelector('.container');

let load=0;
let int=setInterval(blurring,30);
function blurring(){
   load++;
   
   if(load>99){
      clearInterval(int);
   }
   
   loadText.innerText=`${''}`;
   loadText.style.opacity=scale(load,0,100,1,0);
   container.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
}

const scale=(num, in_min, in_max, out_min, out_max) =>{
   return((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min;
}