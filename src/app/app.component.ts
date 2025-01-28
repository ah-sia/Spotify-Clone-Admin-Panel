import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'first-project';

  public data: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    // this.fetchDetails();
  }


  // API Integration
  // public fetchDetails(){
  //   this.http.get('https://taylor-swift-api.sarbo.workers.dev/albums').subscribe(
  //     (resp: any) => {
  //       console.log(resp);
  //       this.data = resp;
  //     }
  //   )
  // }
}
