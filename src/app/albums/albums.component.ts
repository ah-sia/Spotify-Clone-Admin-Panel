import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../service/albums.service';
import { SongCardComponent } from '../components/song-card/song-card.component';


@Component({
  selector: 'app-albums',
  imports: [CommonModule,SongCardComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe({
      next: (response) => {
        this.albums = response;
      },
      error: (err) => {
        console.error('Error fetching songs:', err);
      },
    });
}

}