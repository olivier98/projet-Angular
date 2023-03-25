import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-voir-posts',
  templateUrl: './voir-posts.component.html',
  styleUrls: ['./voir-posts.component.css']
})
export class VoirPostsComponent {
  posts: any;
  authors: any;
  private id:any;

  constructor(private authorsService:AuthorsService, private postsService: PostsService, private activeRoute :ActivatedRoute ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.authors = params.get('author_id');
      }
    );
    this.postsService.getPost(this.id).subscribe(
      Response =>{
        this.posts = Response
      }
    );

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

refresh(){
  this.authorsService.getAuthors().subscribe(
    data => {
      this.authors = data;
      console.log(this.authors);
    }
  );
}
refrech(){
  this.postsService.getPosts().subscribe(
    data=>{
      this.posts = data;
      console.log(this.posts)
    }
  );
}
}
