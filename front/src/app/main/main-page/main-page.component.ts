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
   const resp= await this.postsService.getPosts();
   console.log(resp)
   //this.listPosts=

  }

  async createPost($event:any){
    const resp= await this.postsService.addPost($event);
    const resp2= await this.postsService.getPosts();
  }

  async signOutAction(){
    localStorage.removeItem('token');
    await this.router.navigateByUrl(`auth/login`, { replaceUrl: true });
  }

}
