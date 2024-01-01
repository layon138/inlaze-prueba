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
    "createat":""
  }
  @Output() likeReaction = new EventEmitter<any>();

  itsMyPost(){
   const myId= JSON.parse(localStorage.getItem('user') || '').userid  || ''
   console.log(myId===this.postInfo.userid )
  return myId===this.postInfo.userid ? true:false
  }
  
}
