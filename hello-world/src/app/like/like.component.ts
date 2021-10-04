import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('is-liked') liked: boolean = false;
  @Input('like-count') count: number = 0;

  onClick() {
    this.liked = !this.liked;
    this.count += this.liked ? 1 : -1;
  }
}
