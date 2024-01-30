// Function to fade in elements
function fadeIn(element) {
    let opacity = 0;
    const intervalId = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
}

// Fade in header and photo
const header = document.querySelector('header');
const profilePhoto = document.getElementById('profile-photo');

fadeIn(header);
setTimeout(() => {
    profilePhoto.style.transform = 'scale(1)';
}, 500);

// Fade in sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    fadeIn(section);
});
