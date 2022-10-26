const display = {
  firstPlayerSymbol: document.querySelectorAll(".infos-content img")[0],
  secondPlayerSymbol: document.querySelectorAll(".infos-content img")[1],

  init() {
    document
      .querySelector("#reset-button")
      .addEventListener("click", (event) => handleResetButton(event));
  },

  setSymbol(box, symbol) {
    console.log(this.firstPlayerSymbol);
    box.append(
      symbol == "O"
        ? this.firstPlayerSymbol.cloneNode(true)
        : this.secondPlayerSymbol.cloneNode(true)
    );
  },

  showWinMessage(symbol) {
    const pElement = document.querySelector("#status");
    console.log(pElement);
    pElement.innerHTML = `<span class="${symbol}">${symbol}</span> has won !`;
  },

  showTieMessage() {
    const pElement = document.querySelector("#status");
    console.log(pElement);
    pElement.innerHTML = `Tie ...`;
  },

  showCurrentPlayer() {
    const pElement = document.querySelector("#status");
    console.log(pElement);
    pElement.innerHTML = `It's <span class="${currentPlayer}">${currentPlayer}</span>'s turn !`;
  },

  reset() {
    const pElement = document.querySelector("#status");
    pElement.innerHTML = "";

    document.querySelectorAll("#game-zone .morpion-box").forEach((box) => {
      if (box.getElementsByTagName("img").length == 0) return;
      box.removeChild(box.lastElementChild);
    });

    this.showCurrentPlayer();
  },
};
