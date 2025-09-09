// Minimal dependency-free lightbox
const Lightbox = (()=>{
  function open(src){
    const overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.innerHTML = `<div class="lb-backdrop"></div>
      <div class="lb-content"><img src="${src}" alt="" /></div>`;
    overlay.addEventListener('click', ()=> document.body.removeChild(overlay));
    document.body.appendChild(overlay);
    requestAnimationFrame(()=> overlay.classList.add('show'));
  }
  function bindAll(sel){
    document.querySelectorAll(sel).forEach(a=>{
      a.addEventListener('click', (e)=>{
        if (a.classList.contains('poster-link')) return; // let poster link navigate
        e.preventDefault();
        open(a.getAttribute('data-lightbox') || a.getAttribute('href'));
      });
      a.addEventListener('contextmenu', e=> e.preventDefault());
      a.addEventListener('touchstart', function(){
        this._press = setTimeout(()=> open(a.getAttribute('data-lightbox') || a.getAttribute('href')), 500);
      });
      a.addEventListener('touchend', function(){ clearTimeout(this._press); });
    });
  }
  return { bindAll };
})();