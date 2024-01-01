import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input() postInfo:Post={
    "userName": "julisn vargas",
    "likes": 1,
    "title": "delectus aut autem",
    "description": "delectus aut autem",
    "date":"25/12/2023"
  }
  @Output() likeReaction = new EventEmitter<any>();
  
}
