import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { AppErrorHandler } from '../common/app-error-handler';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
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

    this.service.createPost(post).subscribe(
      (response) => {
        post['id'] = (response as JPHResponse).id;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
        } else throw error;
      }
    );
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.service.deletePost(345).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else throw error;
      }
    );
  }
}

interface JPHResponse {
  id: number;
}
