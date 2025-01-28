import { SongService } from './../../service/song.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-song',
  imports: [
    FormsModule,
  ],
  templateUrl: './add-song.component.html',
  styleUrl: './add-song.component.css',
})

export class AddSongComponent implements OnInit {

  public getJsonValue: any;
  public postJsonValue: any;

  constructor(
    public songService: SongService, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getSongInfo();
  }

  public getSongInfo(){
    this.http.get('http://localhost:5000/api/SongInfo/GetSongInfo').subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    );
  }
  
  assets = {
    upload_added: '/assets/upload_added.png',
    upload_area: '/assets/upload_area.png',
    upload_song: '/assets/upload_song.png'
  };

  song: File | null = null; // Initialize with a default File object
  image: File | null = null; // Initialize with a default File object
  imageUrl: string = ''; // URL for the selected image


  // Handles songs input
  onSongChange(event: any): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0]; // gets the selected file

    if (file){
      this.song = file;
      this.songService.setSong(file);
      console.log(this.song);
    }
  }

  // Handles image input
  onImageChange(event: any): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null; // gets the selected file

    if (file){
      this.image = file;
      this.songService.setImage(file);
      console.log(this.image);
    }
  }

  // Handles form submission
  addSongInfo(){
    console.log(this.songService.SongInfo);

    // POST request
      this.http.post('http://localhost:5000/api/SongInfo/AddSongInfo', this.songService.SongInfo)
      .subscribe({next: (response)=> {
        console.log("Form submitted successfully.", response);
        this.songService.resetForm();
      },
      error: (error) => {
        console.error("Error submitting form", error);
      }
    });
  }
}
