import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response as any;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post).subscribe((response) => {
      post['id'] = (response as JPHResponse).id;
      this.posts.splice(0, 0, post);
      console.log(response);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}

interface JPHResponse {
  id: number;
}
