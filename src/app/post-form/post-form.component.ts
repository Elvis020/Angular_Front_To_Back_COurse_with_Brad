import { PostsService } from './../service/posts.service';
import { Post } from './../posts/post';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Input() currentPost: Post;
  @Output() newPost = new EventEmitter<Post>();

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add a post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });

    }
  }

}
