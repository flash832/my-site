// show year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// contact form demo notice (no backend)
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', e=>{
    // if using Formspree it will submit; this just shows quick message
    setTimeout(()=> {
      alert('Thank you! Form submitted.');
    }, 300);
  });
}
