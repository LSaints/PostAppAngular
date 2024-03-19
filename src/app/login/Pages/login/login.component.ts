import { Component } from '@angular/core';

// Components
import { SectionLoginComponent } from '../../components/section-login/section-login.component';
import { TopPostsComponent } from '../../components/top-posts/top-posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService, UserService],
  imports: [SectionLoginComponent, TopPostsComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
