import { Client } from "boardgame.io/client";
import { VolleyballReturns } from "./game";

class VolleyballReturnsClient {
  constructor() {
    this.client = Client({ game: VolleyballReturns });
    this.client.start();
  }
}

const app = new VolleyballReturnsClient();
