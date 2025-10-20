// small interactions and dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for nav anchors
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const href = a.getAttribute('href');
    const el = document.querySelector(href);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

