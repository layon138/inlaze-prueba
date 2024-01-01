import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-insert-post',
  templateUrl: './form-insert-post.component.html',
  styleUrl: './form-insert-post.component.css'
})
export class FormInsertPostComponent {

  postsForm: FormGroup;
  @Output() callApiPosts = new EventEmitter<any>();
  constructor() {
    this.postsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }

  createPost(){
    console.log(this.postsForm.value)
    if(this.postsForm.valid){
      this.callApiPosts.emit(this.postsForm.value)
    }
  }

}


