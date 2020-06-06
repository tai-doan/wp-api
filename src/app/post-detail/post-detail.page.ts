import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, ActivationStart } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  post: any=[];
  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getData(`posts/${id}`).subscribe( data => {
      console.log(data);
      this.post= data;
    })
  }

  onDelete(){
    this.apiService.deleteData(`posts/${this.post.id}`).subscribe(data => {
      console.log(data);
      this.apiService.refreshPost.next();
      this.router.navigateByUrl('/home');
    });
  }
}
