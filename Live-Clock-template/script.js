analog = document.querySelector(".analogclock");
setInterval(()=>{
   d=new Date();
   ht=d.getHours();
   hm=d.getMinutes();
   hs=d.getSeconds();
   hrotation= 30*ht+hm/2;
   mrotation= 6*hm;
   srotation= 6*hs;

   hour.style.transform=`rotate(${hrotation}deg)`;
   minute.style.transform=`rotate(${mrotation}deg)`;
   second.style.transform=`rotate(${srotation}deg)`;
   
   if(ht<10){
      ht="0"+ht;
   }
   if(hm<10){
      hm="0"+hm;
   }
   analog.innerHTML = `<p>${ht}:${hm}</p>`;
   
},1000);