import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitApiService {

private userName:string;
private apiKey='de9bac62698d3bd9006ce5af646213863a6897b4';

  constructor(public http: HttpClient) {
console.log('service is now ready');
this.userName='cherucole';

  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + apiKey)
  }
}
