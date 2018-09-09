const home = document.getElementById('home');
const ourHistory = document.getElementById('our-history');
const btnHome = document.getElementById('btn-home');
const btnHistory = document.getElementById('btn-history');



btnHome.addEventListener('click', () => {

    showSections(event, 'home');

});

btnHistory.addEventListener('click', () => {

    showSections(event, 'our-history');

}); 