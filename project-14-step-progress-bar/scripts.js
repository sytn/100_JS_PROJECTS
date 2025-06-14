// Create progress steps dynamically
const progressContainer = document.querySelector('.progress-container');
const steps = 4; // Change this number for more/fewer steps

// Clear any existing circles (if reloading)
progressContainer.querySelectorAll('.circle').forEach(circle => circle.remove());

// Create circles for each step
for (let i = 1; i <= steps; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    if (i === 1) circle.classList.add('active');
    circle.textContent = i;
    progressContainer.insertBefore(circle, progressContainer.querySelector('.buttons'));
}

// Create progress bar if it doesn't exist
let progress = document.querySelector('.progress');
if (!progress) {
    progress = document.createElement('div');
    progress.classList.add('progress');
    progressContainer.insertBefore(progress, progressContainer.querySelector('.buttons'));
}

// DOM elements
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Event listeners
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) currentActive = circles.length;
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) currentActive = 1;
    update();
});

// Update step visuals
function update() {
    circles.forEach((circle, idx) => {
        circle.classList.toggle('active', idx < currentActive);
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // Button state management
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}

// Initialize
update();