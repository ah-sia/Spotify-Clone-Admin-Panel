import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  imports: [HttpClientModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent {
  @Input() public albumCover: string = ''; //for thumbnail url
  @Input() public album: any;

}
