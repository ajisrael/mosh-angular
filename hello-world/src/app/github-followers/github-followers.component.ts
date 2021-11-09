import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../github-followers.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit(): void {
    forkJoin([this.route.paramMap, this.route.queryParamMap]).subscribe(
      (combined) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        // example of how parameters would be used
        // this.service.getAll({ id: id, page: page });
      }
    );
    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers));
  }
}
