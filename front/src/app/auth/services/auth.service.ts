import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LoginUserRequest, LoginUserResponse, RegisterUserRequest, RegisterUserResponse } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }

  saveToken(token: string,user:string){
    localStorage.setItem("token",token)
    localStorage.setItem("user",user)
  }

  async registerUser(user:RegisterUserRequest): Promise<RegisterUserResponse> {
    const result =await firstValueFrom( this.httpService
      .post<RegisterUserResponse>('http://localhost:3000/user/add', user, {
      }))

    return result;
    }


    async authUser(user:LoginUserRequest): Promise<LoginUserResponse> {
      const response =await firstValueFrom( this.httpService
        .post<LoginUserResponse>('http://localhost:3000/auth', user, {
        }))
  
      return  response;
      }
}
