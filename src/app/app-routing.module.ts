import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorsComponent } from './list-authors/list-authors.component';



const routes: Routes = [
  {path: "listAuthors", component: ListAuthorsComponent},
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
