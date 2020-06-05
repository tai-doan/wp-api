import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any=[];
  constructor(private ApiService: ApiService, private router: Router) {
    this.ApiService.getData('posts').subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.posts= data;
      }, 2000);
    })
  }

  viewDetail(id){
    this.router.navigate([`post-detail/${id}`]);
  }
}
