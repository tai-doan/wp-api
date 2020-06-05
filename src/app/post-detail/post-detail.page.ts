import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {
  post: any=[];
  id;
  constructor(private activatedRoute: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit() {
    // const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe(p => {
      this.id = +p.get('id');
    })
    console.log(this.id);
    this.ApiService.getData(`posts/${this.id}`).subscribe( data => {
      console.log(data);
      this.post= data;
      // setTimeout(() => {
      //   this.post= data;
      // }, 1500);
    })
  }

}
