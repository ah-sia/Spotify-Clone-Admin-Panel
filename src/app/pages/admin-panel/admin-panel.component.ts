import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { AddSongComponent } from '../../components/add-song/add-song.component';

@Component({
  selector: 'app-admin-panel',
  imports: [SidebarComponent,AdminNavbarComponent, AddSongComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
