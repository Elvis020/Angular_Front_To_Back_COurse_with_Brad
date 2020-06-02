import { PostsService } from './../service/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  // currentPost: Post = {
  //   id: 0,
  //   title: '',
  //   body: ''
  // };


  constructor(private postsService: PostsService) { }


  ngOnInit() {
    this.postsService.getPosts().subscribe(post => {
      this.posts = post;
    });
  }

  addNewPostForm(post: Post) {
    this.posts.unshift(post);
  }

  // onEditPost(post: Post) {
  //   this.currentPost = post;
  // }
}
