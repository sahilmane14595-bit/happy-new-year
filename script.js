// Floating hearts
const hearts=document.querySelector('.hearts');
if(hearts){
  setInterval(()=>{
      const h=document.createElement('div');
      h.className='heart';
      h.innerHTML='❤️';
      h.style.left=Math.random()*100+'%';
      h.style.fontSize=(15+Math.random()*25)+'px';
      hearts.appendChild(h);
      setTimeout(()=>h.remove(),6000);
  },300);
}

// Canvas stars
const canvas=document.getElementById('bgCanvas');
if(canvas){
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  let stars=[];
  for(let i=0;i<150;i++){
    stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,radius:Math.random()*2,alpha:Math.random(),speed:0.2+Math.random()*0.5});
  }
  function animateStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;
      ctx.fill();
      s.y-=s.speed; 
      if(s.y<0){ s.y=canvas.height; s.x=Math.random()*canvas.width; }
      s.alpha += (Math.random()-0.5)*0.02;
      if(s.alpha>1)s.alpha=1; 
      if(s.alpha<0)s.alpha=0;
    });
    requestAnimationFrame(animateStars);
  }
  animateStars();
}

// Confetti function
function createConfetti(){ 
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  let confetti=[]; 
  for(let i=0;i<100;i++){
      confetti.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height/2,r:Math.random()*6+4,dx:Math.random()*4-2,dy:Math.random()*4+2,color:`hsl(${Math.random()*360},100%,50%)`});
  }
  let interval=setInterval(()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      confetti.forEach((c,index)=>{
          ctx.beginPath(); ctx.arc(c.x,c.y,c.r,0,Math.PI*2); ctx.fillStyle=c.color; ctx.fill();
          c.x+=c.dx; c.y+=c.dy; c.dy+=0.05;
          if(c.y>canvas.height) confetti.splice(index,1);
      });
      if(confetti.length===0) clearInterval(interval);
  },16);
}

// Double click images Easter egg
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener("dblclick",()=>{
    alert("Hidden memory 💭\nRemember how everything felt right with us?");
  });
});

