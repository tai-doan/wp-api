import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any=[];
  constructor(public authService: AuthService, private ApiService: ApiService, private router: Router) {
    this.getPost();
    this.ApiService.refreshPost.subscribe(() => {
      this.getPost();
    });
  }

  getPost(){
    this.ApiService.getData('posts').subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.posts= data;
      }, 2000);
    })
  }
  onCreate(){
    console.log("onCreate")
  }
}
