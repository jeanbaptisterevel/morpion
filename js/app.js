document.addEventListener("DOMContentLoaded", () => {
  grid.init();
  display.init();
});

// Setup game
playerWon = null;
currentPlayer = "O";
roundNumber = 0;
display.showCurrentPlayer();

// ---- Gestion des events ----
function handleGameClick(event) {
  // Je vérifie si le jeu n'est pas terminé
  if (playerWon != null) return;
  if (roundNumber == 9) return;
  roundNumber++;

  // Je récupère l'index de ma case et je calcule ses coordonnées
  const gameBoxindex = getBoxIndex(event.target);

  const row = Math.floor(gameBoxindex / 3);
  const column = gameBoxindex % 3;

  // Si la case n'est pas vide, alors c'est déjà joué.
  if (!grid.isEmpty) return;

  // Sinon on peut jouer !

  // J'ajoute le symbol à la case, puis je l'affiche
  grid.add(row, column, currentPlayer);
  display.setSymbol(event.target, currentPlayer);

  // Je vérifie si le joueur a win
  if (grid.hasWon(currentPlayer)) {
    playerWon = currentPlayer;
    display.showWinMessage(playerWon);
    return;
  } else if (roundNumber == 9) {
    display.showTieMessage();
    return;
  }

  // Personne n'a win. On continue, on change de joueur
  switchPlayer();
  display.showCurrentPlayer();
}

function handleResetButton() {
  // Reset modules
  grid.reset();
  display.reset();

  // Reset variables
  playerWon = null;
  currentPlayer = "O";
  roundNumber = 0;

  display.showCurrentPlayer();
}

// ---- Fonctions utilitaires ----
function getBoxIndex(boxTarget) {
  const gameBoxList = Array.from(document.querySelectorAll("#game-zone .morpion-box"));
  return gameBoxList.indexOf(boxTarget);
}

function switchPlayer() {
  currentPlayer = currentPlayer == "O" ? "X" : "O";
}
