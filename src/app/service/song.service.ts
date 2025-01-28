import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SongService {

  constructor() { }

  SongInfo = {
    songId: -1,
    songPath:  new File([], "default_song.mp3"),
    imagePath: new File([], "default_image.png"),
    songTitle: '',
    artistName: '',
    albumTitle: '',
    songDuration: ''
  }
  
  setSong(file: File | null){
    if (file) {
      this.SongInfo.songPath = file;
    } else {
      console.error("Invalid file provided for song.")
    }
  }

  setImage(file: File | null){
    if (file) {
      this.SongInfo.imagePath = file;
    } else {
      console.error("Invalid file provided for image.")
    } 
  }

  resetForm(){
    this.SongInfo = {
      songId: -1,
      songPath:  new File([], "default_song.mp3"),
      imagePath: new File([], "default_image.png"),
      songTitle: '',
      artistName: '',
      albumTitle: '',
      songDuration: ''
    }
  }

}
