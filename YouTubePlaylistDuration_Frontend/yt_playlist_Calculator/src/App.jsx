

// export default App;

import React from "react";
import PlaylistForm from "./components/PlaylistForm";
import "./style.css"; // Import the external CSS

function App() {
  return (
    <div className="container">
      <h2>YouTube Playlist Duration Calculator</h2>
      <PlaylistForm />
    </div>
  );
}

export default App;
