import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    AddPostsComponent,
    ListAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
