const projectCards = document.querySelectorAll('.project-card');
const projectCardOverlays = document.querySelectorAll('.overlay');

projectCards.forEach((projectCard, index) => {
    projectCard.addEventListener('click', () => {
        projectCardOverlays[index].style.display = 'flex';
        console.log('clicked');
    });
});
