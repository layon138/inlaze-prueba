import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private authService:AuthService,private router:Router) {
    this.registerForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateborn: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  async registerAPi(){
    if(this.registerForm.valid){
      const res=await this.authService.registerUser(this.registerForm.value);
      if(res.status==='success'){
        await this.router.navigateByUrl(`auth/login`, { replaceUrl: true });
      }
    }
  
  }
}
