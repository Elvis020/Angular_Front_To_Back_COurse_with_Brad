import { PostsService } from './service/posts.service';
import { DataService } from './service/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import 'rxjs';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';
import { HomeComponent } from './Home/Home.component';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      NavbarComponent,
      PostsComponent,
      PostFormComponent,
      HomeComponent,
      PostComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      DataService,
      PostsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
