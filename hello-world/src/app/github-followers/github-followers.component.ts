import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../github-followers.service';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          //Required parameters
          let id = combined[0].get('id');
          let location = combined[0].get('location');

          //Optional parameters
          let page = combined[1].get('page');
          let newest = combined[1].get('newest');
          let cheapest = combined[1].get('cheapest');

          //Followers data
          return this.service.getAll();
        })
      )
      .subscribe((followers) => (this.followers = followers));
  }
}
