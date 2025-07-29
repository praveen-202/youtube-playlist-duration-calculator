package com.playlist_clac.dto;

import java.util.Map;

// DTO to return playlist info: total videos, total duration, and adjusted times
public class PlaylistResponse {
    
    // Total number of videos in the playlist
    private int totalVideos;
    
    // Total duration in hh:mm:ss format
    private String totalDuration;
    
    // Adjusted durations at various speeds (e.g., 1.25x, 2x)
    private Map<String, String> adjustedSpeeds;

    // Constructor to initialize all fields
    public PlaylistResponse(int totalVideos, String totalDuration, Map<String, String> adjustedSpeeds) {
        this.totalVideos = totalVideos;
        this.totalDuration = totalDuration;
        this.adjustedSpeeds = adjustedSpeeds;
    }

    // Getter for total videos
    public int getTotalVideos() {
        return totalVideos;
    }

    // Getter for total duration
    public String getTotalDuration() {
        return totalDuration;
    }

    // Getter for adjusted durations by playback speed
    public Map<String, String> getAdjustedSpeeds() {
        return adjustedSpeeds;
    }
}
