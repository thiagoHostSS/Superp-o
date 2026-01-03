const lupaBtn = document.getElementById('lupa');
const barraps = document.getElementById('barraps');
const menuBtn = document.getElementById('menu');
const barramenu = document.getElementById('barramenu');

lupaBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    barramenu.classList.remove('active'); 
    barraps.classList.toggle('active'); 
});

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    barraps.classList.remove('active'); 
    barramenu.classList.toggle('active'); 
});

barraps.addEventListener('click', (e) => { e.stopPropagation(); });
barramenu.addEventListener('click', (e) => { e.stopPropagation(); });

document.addEventListener('click', (e) => {
    barraps.classList.remove('active');
    barramenu.classList.remove('active');
});

const form = document.querySelector('form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado! Inscrição realizada com sucesso.');
        form.reset();
    });
}