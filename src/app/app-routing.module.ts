import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AdminComponent } from './admin/admin.component';
import { VoirPostsComponent } from './voir-posts/voir-posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';



const routes: Routes = [
  {path: "Authors", component: ListAuthorsComponent},
  {path: "Acceuil", component: ListPostsComponent},
  {path: "Admin", component: AdminComponent},
  {path: "lire/:id", component: VoirPostsComponent},
  {path: "Ajouter", component: AddPostsComponent},
  // {path: "navBar", component: NavbarComponent},
  { path: "", pathMatch: "full", redirectTo: "Acceuil" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
