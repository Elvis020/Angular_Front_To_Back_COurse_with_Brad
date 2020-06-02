import { Post } from './../posts/post';
import { PostsService } from './../service/posts.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private localee: Location,
    private actRuu: ActivatedRoute,
    private postse: PostsService
  ) { }

  ngOnInit() {
    const id = +this.actRuu.snapshot.paramMap.get('id');
    this.postse.getPost(id).subscribe( post => this.post = post);
  }

}
