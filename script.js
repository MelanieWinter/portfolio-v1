const projectCards = document.querySelectorAll('.project-card');
const projectCardOverlays = document.querySelectorAll('.overlay');

console.log('PROJECT CARDS', projectCards)
console.log('PROJECT CARD OVERLAYS', projectCardOverlays)

projectCards.forEach((projectCard, index) => {
    console.log('PRC INDEX', projectCard[index])
    projectCard.addEventListener('click', () => {
        projectCardOverlays[index].style.display = 'flex';
        console.log('PCO INDEX', projectCardOverlays[index])
        console.log('clicked');
    });
});
