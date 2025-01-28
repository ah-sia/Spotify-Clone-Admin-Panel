import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { AlbumsComponent } from '../../albums/albums.component';
import { AlbumsService } from '../../service/albums.service';

@Component({
  selector: 'app-home',
  imports: [TopNavComponent, AlbumsComponent],
  providers: [AlbumsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
