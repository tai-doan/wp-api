import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.page.html',
  styleUrls: ['./post-add.page.scss'],
})
export class PostAddPage implements OnInit {
  model: any = {};
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onAdd(f){
    this.apiService.postData('posts', f.value).subscribe(data => {
      console.log(data);
      this.apiService.refreshPost.next();
      this.router.navigateByUrl('/home');
    });
  }
}
