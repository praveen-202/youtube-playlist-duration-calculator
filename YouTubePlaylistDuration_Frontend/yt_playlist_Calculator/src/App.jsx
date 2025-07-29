// import React from "react";
// import PlaylistForm from "./components/PlaylistForm";

// function App() {
//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">YouTube Playlist Duration Calculator</h2>
//       <PlaylistForm />
//     </div>
//   );
// }

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
