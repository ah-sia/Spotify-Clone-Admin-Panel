import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent implements OnInit{
  albums: any[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.getSongs().subscribe({
      next: (response) => {
        this.songs = response;
      },
      error: (err) => {
        console.error('Error fetching songs:', err);
      },
    });
  }

}
