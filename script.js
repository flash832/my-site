// show year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// simple form alert
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', e=>{
    setTimeout(()=> alert('Thank you! Your message was sent.'), 250);
  });
}

// Dark mode toggle
function setDark(on){
  if(on) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  localStorage.dark = on ? '1' : '0';
}

document.querySelectorAll('#dmToggle, #dmToggle2, #dmToggle3, #dmToggle4').forEach(btn=>{
  if(btn){
    btn.addEventListener('click', ()=>{
      const isDark = document.body.classList.contains('dark');
      setDark(!isDark);
      btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
  }
});

if(localStorage.dark === '1') {
  setDark(true);
  document.querySelectorAll('.dm-btn').forEach(b => b.textContent = '☀️');
}
