import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../../shared/title-bar/title-bar.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
