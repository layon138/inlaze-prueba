export interface RegisterUserRequest {
    fullname: string
    email: string
    dateborn: string
    password: string
  }


export interface RegisterUserResponse{
    message: string
    status: string
  }
  

  export interface LoginUserRequest {
    email: string
    password: string
  }


export interface LoginUserResponse{
    message: string
    token: string
    user:any
    status: string
  }