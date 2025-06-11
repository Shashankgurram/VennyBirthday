// Create floating balloons
function createFloatingBalloon() {
    const container = document.querySelector('.floating-hearts');
    const balloon = document.createElement('div');
    balloon.textContent = '🎈';
    balloon.style.position = 'absolute';
    balloon.style.fontSize = Math.random() * 20 + 20 + 'px';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.top = '100%';
    balloon.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
    balloon.style.opacity = Math.random() * 0.5 + 0.5;
    
    container.appendChild(balloon);
    
    // Remove balloon after animation
    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

// Create balloons periodically
setInterval(createFloatingBalloon, 300);

// Add balloon pop effect
document.querySelectorAll('.balloon').forEach(balloon => {
    balloon.addEventListener('click', function() {
        this.style.animation = 'none';
        this.style.transform = 'scale(1.5)';
        this.style.opacity = '0';
        setTimeout(() => {
            this.style.display = 'none';
        }, 300);
    });
});

// Enhanced heart click effect
document.querySelector('.heart-container').addEventListener('click', function() {
    this.style.animation = 'none';
    this.style.transform = 'scale(1.5)';
    setTimeout(() => {
        this.style.animation = 'pulse 1.5s infinite';
        this.style.transform = 'scale(1)';
    }, 300);
    
    // Create burst of balloons
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingBalloon();
        }, i * 100);
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 