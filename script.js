const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));}
document.getElementById('year').textContent=new Date().getFullYear();
const topBtn=document.querySelector('.to-top');window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>400),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
