// Set a maximum number of confetti pieces on the screen
const MAX_CONFETTI = 200;  // You can adjust this number as needed
let currentConfettiCount = 0; // Tracks the current number of confetti pieces

// Function to create a single confetti piece
function createConfettiPiece() {
    if (currentConfettiCount >= MAX_CONFETTI) return; // Stop if we've reached the max number of confetti pieces

    const confettiDiv = document.querySelector('.confetti');
    const confettiColors = ['#d7b3ff', '#c1a6ff', '#a589e8', '#9370db', '#6a5acd'];
    
    let confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");

    // Randomize starting position and properties for each piece
    confettiPiece.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    confettiPiece.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s and 5s
    confettiPiece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];

    // Append the confetti piece to the confetti div
    confettiDiv.appendChild(confettiPiece);
    currentConfettiCount++; // Increase the current count of confetti pieces

    // Remove the confetti piece once it falls out of view
    confettiPiece.addEventListener('animationend', () => {
        confettiPiece.remove();
        currentConfettiCount--; // Decrease the count once a piece is removed
    });
}

// Function to start continuous confetti falling with a faster rate
function startConfetti() {
    setInterval(createConfettiPiece, 50); // Creates a new confetti piece every 50ms (faster rate)
}

// Start the confetti animation immediately when the window loads
window.onload = startConfetti;
