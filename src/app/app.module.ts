import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddSongComponent } from './components/add-song/add-song.component';

@NgModule({
  declarations: [  ],
  imports: [
    BrowserModule // Add this here
  ],
  providers: [provideHttpClient()],
  bootstrap: []
})
export class AppModule { }
