const homeDisplay = document.getElementById('home-score');
const guestDisplay = document.getElementById('guest-score');

let homeScore = 0;
let guestScore = 0;

function scorePoints(team, points) {
  team === 'home' ? homeScore += points : guestScore += points;
  displayPoints();
}

function displayPoints() {
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
}







