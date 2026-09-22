import { Client } from "boardgame.io/client";
import { board_height, board_width, VolleyballReturns } from "./game";

class VolleyballReturnsClient {
  constructor(rootElement) {
    this.client = Client({ game: VolleyballReturns });
    this.client.start();

    // Build client side view.
    this.rootElement = rootElement;
    this.createBoard();
  }

  createBoard() {
    // Create cells in rows for the Volleyball Returns board.
    const rows = [];
    for (let i = 0; i < board_height; i++) {
      const cells = [];
      for (let j = 0; j < board_width; j++) {
        const id = 3 * i + j;
        cells.push(`<td class="cell" data-id="${id}"></td>`);
      }
      rows.push(`<tr>${cells.join("")}</tr>`);
    }

    // Add the HTML to our app <div>.
    // We’ll use the empty <p> to display the game winner later.
    this.rootElement.innerHTML = `
      <table>${rows.join("")}</table>
      <p class="winner"></p>
    `;
  }
}

const appElement = document.getElementById('app');
new VolleyballReturnsClient(appElement);
