import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitApiService } from '../git-api.service';
import { users } from '../username'
import { repositories } from '../repositories'


@Component({
  selector: 'app-git-api',
  templateUrl: './git-api.component.html',
  styleUrls: ['./git-api.component.css']
})
export class GitApiComponent implements OnInit {
  users;
  repositories;
  userName: string;

  constructor(public gitApiService: GitApiService) {
    this.gitApiService.getUserInfo().subscribe(userPage => {
      console.log(userPage);
      this.users = userPage;
    });

    this.gitApiService.getUserRepos().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;

    });

  }

  findUser() {
    this.gitApiService.updateProfile(this.userName);
    this.gitApiService.getUserInfo().subscribe(userPage => {
      console.log(userPage);
      this.users = userPage;
    });

    this.gitApiService.getUserRepos().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;

    });
  }

  ngOnInit() {
  }

}
