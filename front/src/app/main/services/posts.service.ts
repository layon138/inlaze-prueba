import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RequestPostCreate } from '../model/post.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpService: HttpClient) {}

  async getPosts(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get<any>('http://localhost:3000/posts/list', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
    );

    return response;
  }

  async addPost(post: RequestPostCreate): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post<any>('http://localhost:3000/posts/create', post, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
    );

    return response;
  }

  async editPost(post: any): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post<any>('http://localhost:3000/posts/update', post, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
    );

    return response;
  }

  async deletePost(post: any): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post<any>('http://localhost:3000/posts/delete', post, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
    );

    return response;
  }
}
