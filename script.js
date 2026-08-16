const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('name').value.trim();
  const p=document.getElementById('phone').value.trim();
  const s=document.getElementById('service').value;
  const d=document.getElementById('details').value.trim();
  const message=`Vindauga Glass Solutions Quote Request\n\nName: ${n}\nPhone: ${p}\nService: ${s}\nDetails: ${d||'Not provided'}`;
  window.location.href='sms:+12405385393?&body='+encodeURIComponent(message);
});