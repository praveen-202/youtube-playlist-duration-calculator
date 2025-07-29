package com.playlist_clac.controller;

import org.springframework.web.bind.annotation.*;

import com.playlist_clac.dto.PlaylistResponse;
import com.playlist_clac.service.YoutubeService;

// REST controller to handle playlist duration API requests
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  // Allow requests from any origin
public class PlaylistController {

    // Injecting the YouTube service
    private final YoutubeService youtubeService;

    // Constructor-based dependency injection
    public PlaylistController(YoutubeService youtubeService) {
        this.youtubeService = youtubeService;
    }

    // Endpoint to get the total duration and adjusted times of a YouTube playlist
    @GetMapping("/duration")
    public PlaylistResponse getDuration(@RequestParam String playlistUrl) {
        return youtubeService.fetchPlaylistDuration(playlistUrl);
    }
}
