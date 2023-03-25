import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  posts : any;

  constructor(private postsService : PostsService, private router : Router){}

  detailsPost(id:any){
    this.router.navigate(['detailsPosts/'+id]);
  }

  refrech(){
      this.postsService.getPosts().subscribe(
        data => {
          this.posts = data;
          console.log(this.posts)
        }
      );
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.refrech();
  }
}
