import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  posts:any;
  authors:any = [];

  constructor(private authorsService : AuthorsService, private postsService : PostsService, private router : Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.refrech();
    this.refresh();

  }


getAuthorForPost(id: number){
let result: any;
this.authors.forEach((author: any) => {

if (id === author.id){
result = author;

}
});
console.log(result)
return result;

}



  refrech(){
    this.postsService.getPosts().subscribe(
      data=>{
        this.posts = data;
        console.log(this.posts)
      }
    );
  }

  refresh(){
    this.authorsService.getAuthors().subscribe(
      data => {
        this.authors = data;
        console.log(this.authors);
      }
    );
  }
}
