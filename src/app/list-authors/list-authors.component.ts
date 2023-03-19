import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  authors : any;

  constructor(private authorsService : AuthorsService, private router : Router ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.refrech();
  }

  detailsAuthors(id:any){
    this.router.navigate(['detailsAuthors/'+id]);
  }
  refrech() {
    this.authorsService.getAuthor().subscribe(
      data => {
        this.authors = data;
        console.log(this.authors);
      }
    );
  }
}

