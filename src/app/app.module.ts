import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { HeaderComponent } from './include/header/header.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { FooterComponent } from './include/footer/footer.component';
import { MainComponent } from './include/main/main.component';
import { AdminComponent } from './admin/admin.component';
import { VoirPostsComponent } from './voir-posts/voir-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    AddPostsComponent,
    ListAuthorsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    AdminComponent,
    VoirPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
