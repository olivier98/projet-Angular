import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../services/authors.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {
  authors :any;

  constructor(
    private authorsService: AuthorsService,
    private postsService : PostsService,
    private router : Router){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.refrech();
    }
    createPost(addPostForm:any){
      let title = addPostForm.value.title;
      let resume = addPostForm.value.resume;
      let content = addPostForm.value.content;

      let author_id = addPostForm.value.author_id;
      console.log(author_id)
      let image_url = addPostForm.value.image_url;
      let created_at = addPostForm.value.created_at;

      let post ={
        "title": title,
        "resume": resume,
        "content": content,
        "author_id": author_id,
        "image_url": image_url,
      }
      this.postsService.addPost(author_id, post).subscribe(
        data=>{
          alert("Post ajouté avec succès");
          // console.log(data)
          this.router.navigate(['Admin']);
        },
        e =>{
          console.log(e)
        }
      );
    }
    refrech(){
      this.authorsService.getAuthors().subscribe(
        data=>{
          this.authors = data;
          // console.log(this.authors);
        }
      )
    }
}
