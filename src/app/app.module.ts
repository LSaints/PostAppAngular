import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { HomeModule } from './pages/home/home.module';
import { PostCreateComponent } from './pages/post/post-create/post-create.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    RouterOutlet,
    HomeModule,
    PostCreateComponent
  ],
})
export class AppModule { }
