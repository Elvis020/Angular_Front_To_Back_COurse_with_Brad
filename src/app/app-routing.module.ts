import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './Home/Home.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'users', component: UserComponent},
  { path: 'post/:id', component: PostComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
