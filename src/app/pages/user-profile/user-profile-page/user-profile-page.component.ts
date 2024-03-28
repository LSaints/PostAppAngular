import { Component, Input } from '@angular/core';
import { SideBarComponent } from '../../../shared/side-bar/side-bar.component';
import { FeedComponent } from '../../home/components/feed/feed.component';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [SideBarComponent, FeedComponent, TitleBarComponent],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.scss'
})
export class UserProfilePageComponent {
  username: any = "Mateus Leandro"
}
