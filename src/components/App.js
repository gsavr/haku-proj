import "../css/app.css";
import React, { useState, useEffect } from "react";
import AlbumList from "./AlbumList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlbumList />
      </header>
    </div>
  );
}

export default App;
