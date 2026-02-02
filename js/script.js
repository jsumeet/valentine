// Create floating hearts
function createHearts() {
    const heartContainer = document.getElementById('heartContainer');
    const hearts = ['💕', '💖', '💗', '💝', '💞', '💓', '❤️', '💌'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 300);
}

createHearts();

// Screen navigation
function nextScreen(screenNumber) {
    document.querySelector('.screen.active').classList.remove('active');
    document.getElementById('screen' + screenNumber).classList.add('active');
}

// Open envelope animation
function openEnvelope(envelopeId) {
    const envelope = document.getElementById(envelopeId);
    envelope.classList.add('open');
    
    // After animation completes, go to next screen
    setTimeout(() => {
        if (envelopeId === 'swatiEnvelope') {
            nextScreen(3);
        } else if (envelopeId === 'vedaEnvelope') {
            moveCount = 0; // Reset counter for Veda's screen
            // Reset all Yes button sizes back to normal
            const yesButtons = document.querySelectorAll('.yes-btn');
            yesButtons.forEach(yesBtn => {
                yesBtn.style.transform = 'scale(1)';
            });
            nextScreen(7);
        }
    }, 1200);
}

// Make "No" button run away
let moveCount = 0;
function moveButton(button) {
    moveCount++;
    
    // Make the Yes button bigger each time No is clicked
    const yesButtons = document.querySelectorAll('.yes-btn');
    yesButtons.forEach(yesBtn => {
        const newScale = 1 + (moveCount * 0.50);
        yesBtn.style.transform = `scale(${newScale})`;
        yesBtn.style.transition = 'transform 0.3s ease';
    });
    
    // Check if we're on Veda's screen (screen7) or Swati's screen (screen3)
    const isVedaScreen = document.getElementById('screen7').classList.contains('active');
    
    if (isVedaScreen) {
        // Special messages for Veda with bribes and emotional blackmail!
        if (moveCount === 1) {
            button.textContent = "I'll take you to Disneyland! 🏰";
        } else if (moveCount === 2) {
            button.textContent = "Free chocolates for a week! 🍫";
        } else if (moveCount === 3) {
            button.textContent = "Pony rides every month! 🐴";
        } else if (moveCount === 4) {
            button.textContent = "Papa will be so sad... 😢";
        } else if (moveCount === 5) {
            button.textContent = "Ice cream anytime you want! 🍦";
        } else if (moveCount === 6) {
            button.textContent = "Extra bedtime stories! 📚";
        } else if (moveCount === 7) {
            button.textContent = "You'll make Papa cry! 😭";
        } else if (moveCount === 8) {
            button.textContent = "New unicorn toys! 🦄";
        } else if (moveCount === 9) {
            button.textContent = "Papa's heart is breaking... 💔";
        } else if (moveCount === 10) {
            button.textContent = "Princess dress shopping! 👗";
        } else if (moveCount === 11) {
            button.textContent = "Movie nights every week! 🎬";
        } else if (moveCount === 12) {
            button.textContent = "Please, my little star? 🌟";
        } else if (moveCount === 13) {
            button.textContent = "You're my whole world! 🌍";
        } else if (moveCount === 14) {
            button.textContent = "Papa loves you SO much! 💕";
        } else {
            button.textContent = "Say YES for Papa! 🥺";
        }
    } else {
        // Original messages for Swati
        if (moveCount === 1) {
            button.textContent = "Are you sure? 🥺";
        } else if (moveCount === 2) {
            button.textContent = "Please? 💔";
        } else if (moveCount === 3) {
            button.textContent = "Think again! 😢";
        } else if (moveCount === 4) {
            button.textContent = "Invalid Option, Try again! ❌";
        } else if (moveCount === 5) {
            button.textContent = "Nope, again ✌️";
        } else if (moveCount === 6) {
            button.textContent = "Swati, I am being serious... 😒 ";
        } else if (moveCount === 7) {
            button.textContent = "This button is broken! 🔧";
        } else if (moveCount === 8) {
            button.textContent = "Error 404: No not found 🤖";
        } else if (moveCount === 9) {
            button.textContent = "I'm calling tech support! 📞";
        } else if (moveCount === 10) {
            button.textContent = "You're making me cry! 😭";
        } else if (moveCount === 11) {
            button.textContent = "Fine, I'll ask Veda instead! 👧";
        } else if (moveCount === 12) {
            button.textContent = "This is your last chance! ⚠️";
        } else if (moveCount === 13) {
            button.textContent = "I'm not giving up! 💪";
        } else if (moveCount === 14) {
            button.textContent = "My heart is breaking... 💔💔";
        } else {
            button.textContent = "YES is the only answer! ✨";
        }
    }
    
    const maxX = window.innerWidth - button.offsetWidth - 100;
    const maxY = window.innerHeight - button.offsetHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transform = 'scale(' + Math.max(0.5, 0.8 - moveCount * 0.08) + ')';
}

// Final screen with confetti
function finalScreen() {
    nextScreen(9);
    createConfetti();
}

function createConfetti() {
    const colors = ['#d5679a', '#e89bb8', '#f0b3ce', '#f8c9dd', '#ffd4e5', '#ffe4f1'];
    
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}
