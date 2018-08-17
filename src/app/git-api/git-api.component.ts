import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GitApiService} from '../git-api.service';


@Component({
  selector: 'app-git-api',
  templateUrl: './git-api.component.html',
  styleUrls: ['./git-api.component.css']
})
export class GitApiComponent implements OnInit {
users :any[];
repositories: any[];

  constructor(public gitApiService:GitApiService) {
this.gitApiService.getUserInfo().subscribe(userPage=>{
  console.log(userPage);
  this.users=userPage;
});
this.gitApiService.getUserRepos().subscribe(repos=>{
  console.log(repos);
  this.repositories=repos;
});
   }

  ngOnInit() {
  }

}
