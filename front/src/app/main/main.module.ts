import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { FormInsertPostComponent } from './components/form-insert-post/form-insert-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    CardInfoComponent,
    FormInsertPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
