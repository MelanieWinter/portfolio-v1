const projectCards = document.querySelectorAll('.project-card');
const projectCardOverlays = document.querySelectorAll('.overlay');

projectCards.forEach((projectCard, index) => {
    projectCard.addEventListener('click', () => {
        projectCardOverlays[index].style.display = 'flex';
        console.log('clicked');
    });
});

// const projectCards = document.querySelectorAll('.project-card');
// console.log(projectCards); // Check if projectCards contains elements

// projectCards.forEach((projectCard, index) => {
//     projectCard.addEventListener('click', () => {
//         console.log('clicked'); // Check if click event is triggered
//     });
// });
