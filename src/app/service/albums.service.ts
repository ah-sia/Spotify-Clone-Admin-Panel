import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private apiUrl = 'https://taylor-swift-api.sarbo.workers.dev/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  
}
