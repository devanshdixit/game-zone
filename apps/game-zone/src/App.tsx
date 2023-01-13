import React from "react";

import { Shell } from "ui";
import { CardPicker, TopNumber } from "games";

function App() {
  return (
    <Shell title="Game Zone">
      <div
        className="gamezone"
      >
        <CardPicker />
        <TopNumber />
      </div>
    </Shell>
  );
}

export default App;
