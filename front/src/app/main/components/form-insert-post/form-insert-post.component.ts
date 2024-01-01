import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneratePost, Post } from '../../model/post.model';


@Component({
  selector: 'app-form-insert-post',
  templateUrl: './form-insert-post.component.html',
  styleUrl: './form-insert-post.component.css'
})
export class FormInsertPostComponent {
  @Input() postToEdit:Post={
    "username": "",
    "likes": 0,
    "title": "",
    "description": "",
    "date":"",
    "userid":"",
    "createat":"",
    postid:0
  }
  postsForm: FormGroup;
  @Output() callApiPosts = new EventEmitter<GeneratePost>();
  public edit=false;
  constructor() {
    this.postsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['postToEdit'].firstChange===false){
      this.postsForm.get('title')?.setValue(this.postToEdit.title)
      this.postsForm.get('content')?.setValue(this.postToEdit.description)
      this.edit=true
    }
}

  createPost(){
    if(this.postsForm.valid){
      this.callApiPosts.emit({
        edit:this.edit,
        form:this.postsForm.value
      })
      this.edit=false;
      this.postsForm.reset();
    }
  }

}


