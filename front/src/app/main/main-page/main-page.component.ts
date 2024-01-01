import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public listPosts=[]

  constructor(private postsService:PostsService,private router:Router) {

  }

  async ngOnInit(): Promise<void> {
  this.loadPosts();

  }

  async loadPosts(){
    const resp2= await this.postsService.getPosts();
    this.listPosts=resp2.data.list || []
  }

  async createPost($event:any){
    const post={
      userId:JSON.parse(localStorage.getItem('user') || '').userid  || '',
      ...$event
    }
   await this.postsService.addPost(post);
   await this.loadPosts();
  }

  async signOutAction(){
    localStorage.removeItem('token');
    await this.router.navigateByUrl(`auth/login`, { replaceUrl: true });
  }

}
