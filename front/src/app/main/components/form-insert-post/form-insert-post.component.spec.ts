import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertPostComponent } from './form-insert-post.component';

describe('FormInsertPostComponent', () => {
  let component: FormInsertPostComponent;
  let fixture: ComponentFixture<FormInsertPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInsertPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInsertPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
