import React, { useState } from "react";
import axios from "../api"; // Custom Axios instance for API calls

// PlaylistForm component handles URL input and displays results
const PlaylistForm = () => {
  // State to hold the user-entered playlist URL
  const [url, setUrl] = useState("");

  // State to hold the response/result from the backend
  const [result, setResult] = useState(null);

  // Handle form submission to fetch playlist duration
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      // Make GET request to Spring Boot backend with encoded URL
      const response = await axios.get(`/api/duration?playlistUrl=${encodeURIComponent(url)}`);
      setResult(response.data); // Store result in state
    } catch (error) {
      console.error("Error fetching data:", error); // Log error
      alert("Failed to fetch duration"); // Show alert on failure
    }
  };

  return (
    <div>
      {/* Form to input playlist URL and submit */}
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Text input for playlist URL
          value={url} // Controlled input tied to `url` state
          onChange={(e) => setUrl(e.target.value)} // Update state on input
          placeholder="Paste playlist URL" // Placeholder text
        />
        <button type="submit">Calculate Duration</button> {/* Submit button */}
      </form>

      {/* Conditionally render results if data is available */}
      {result && (
        <div className="result-box">
          <h4>Total Duration: {result.totalDuration}</h4> {/* Total duration text */}

          <table>
            <tbody>
              {/* Row showing total video count */}
              <tr>
                <td>Video Count:</td>
                <td>{result.totalVideos}</td>
              </tr>

              {/* Dynamically render playback speed durations */}
              {Object.entries(result.adjustedSpeeds).map(([speed, time]) => (
                <tr key={speed}>
                  <td>{speed}x:</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PlaylistForm;
