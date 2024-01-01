import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input() postInfo:Post={
    "username": "",
    "likes": 0,
    "title": "m",
    "description": "",
    "date":"",
    "userid":"",
    "postid":0,
    "createat":""
  }
  @Output() editAction = new EventEmitter<any>();
  @Output() deleteAction = new EventEmitter<any>();

  itsMyPost():boolean{
   const myId= JSON.parse(localStorage.getItem('user') || '').userid  || ''
    return myId===this.postInfo.userid ? true:false
  }


  loadToForm(){
    this.editAction.emit(this.postInfo)
  }

  deleteCard(): void{
    this.editAction.emit(this.postInfo)
  }
  
}
