import { Component } from '@angular/core';
import { SideBarComponent } from '../../../shared/side-bar/side-bar.component';
import { FeedComponent } from '../components/feed/feed.component';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { TextEditorComponent } from '../../../shared/text-editor/text-editor.component';
import { ProfilesCardsComponent } from '../components/profiles-cards/profiles-cards.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SideBarComponent,
    FeedComponent,
    TitleBarComponent,
    FooterComponent,
    TextEditorComponent,
    ProfilesCardsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
