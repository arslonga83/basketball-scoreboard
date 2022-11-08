const homeDisplay = document.getElementById('home-score');
const guestDisplay = document.getElementById('guest-score');

let homeScore;
let guestScore;
resetPoints();

function scorePoints(team, points) {
  team === 'home' ? homeScore += points : guestScore += points;
  displayPoints();
}

function displayPoints() {
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
}

function resetPoints() {
  homeScore = 0;
  guestScore = 0;
  displayPoints();
}






