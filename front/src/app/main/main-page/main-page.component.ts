import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneratePost, Post } from '../model/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public listPosts = [];
  public postEdit: Post = {
    username: '',
    likes: 0,
    title: '',
    description: '',
    date: '',
    userid: '',
    createat: '',
    postid:0
  };
  public user=JSON.parse(localStorage.getItem('user') || '')
  public showSideBar=false
  constructor(private postsService: PostsService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.loadPosts();
  }

  async loadPosts() {
    const resp2 = await this.postsService.getPosts();
    this.listPosts = resp2.data.list || [];
  }

  public modalAction(){
    this.showSideBar=! this.showSideBar;
  }

  async createPost($event: GeneratePost) {
    const user=JSON.parse(localStorage.getItem('user') || '').userid
    const post = {
      userId:  user,
      postId:this.postEdit.postid,
      ...$event.form,
    };
    if ($event.edit) {

      await this.postsService.editPost(post);
    } else {
      await this.postsService.addPost(post);
    }

    await this.loadPosts();
  }

  async signOutAction() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    await this.router.navigateByUrl(`auth/login`, { replaceUrl: true });
  }

  loadPostForm($event: Post) {
    this.postEdit = $event;
  }

  async callDeletePostApi($event: Post): Promise<void> {
    const user=JSON.parse(localStorage.getItem('user') || '').userid
    const post = {
      userId:  user,
      postId:$event.postid,
    };
    await this.postsService.deletePost(post);
    await this.loadPosts();
  }
}
