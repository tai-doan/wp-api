import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.page.html',
  styleUrls: ['./post-edit.page.scss'],
})
export class PostEditPage implements OnInit {
  model: any= {};
  id;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');

    if(this.id){
      this.apiService.getData(`posts/${this.id}`).subscribe(data =>{
        console.log(data);
        this.model= {
          title: data['title'].rendered,
          content: data['content'].rendered,
          status: data['status']
        }
      })
    }
  }

  onEdit(f){
    console.log(f.value);
    if(this.id){
      this.apiService.putData(`posts/${this.id}`, f.value).subscribe(data => {
        console.log(data);
        this.apiService.refreshPost.next();
        this.router.navigateByUrl('/home');
      });
    }else{
      this.apiService.postData(`posts`, f.value).subscribe(data => {
        console.log(data);
        this.apiService.refreshPost.next();
        this.router.navigateByUrl('/home');
      });
    }
  }
}
