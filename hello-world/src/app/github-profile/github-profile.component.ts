import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // use when navigating to another page between instances
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // use when component should stay loaded between pages
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      let idNum: number = id ? Number.parseInt(id) : 0;
      console.log(idNum);
    });
  }
}
