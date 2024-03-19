import { HttpClientModule } from '@angular/common/http';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { CommonModule } from '@angular/common';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-top-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [PostService],
  templateUrl: './top-posts.component.html',
  styleUrl: './top-posts.component.scss',
})
export class TopPostsComponent {
  posts: any[] = [];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe((data: any) => {
      this.posts = data.$values;
      console.log(this.posts[0])
    })
  }

  calculateElapsedTime(dataString: string): string {
    const date = new Date(dataString);
    return formatDistanceToNow(date, { locale: ptBR, addSuffix: true })
  }


}
