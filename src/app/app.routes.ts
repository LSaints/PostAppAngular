import { LoginComponent } from './login/Pages/login/login.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { UserProfilePageComponent } from './pages/user-profile/user-profile-page/user-profile-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'userId',
    component: UserProfilePageComponent
  }
];
