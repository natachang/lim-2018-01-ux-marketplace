
const btnHome = document.getElementById('btn-home');
const btnHistory = document.getElementById('btn-history');
const home = document.getElementById('home');
const btnCachangas = document.getElementById('btn-cachangas');
const btnCombos = document.getElementById('btn-combos');
const ourHistory = document.getElementById('our-history');


btnHome.addEventListener('click', () => {

    showSections(event, 'home');

});

btnHistory.addEventListener('click', () => {

    showSections(event, 'our-history');

}); 

btnCombos.addEventListener('click', () => {

    swal('¡Pronto estarán disponibles!');
    
})