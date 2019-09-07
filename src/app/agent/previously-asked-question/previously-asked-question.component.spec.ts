import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouslyAskedQuestionComponent } from './previously-asked-question.component';

describe('PreviouslyAskedQuestionComponent', () => {
  let component: PreviouslyAskedQuestionComponent;
  let fixture: ComponentFixture<PreviouslyAskedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouslyAskedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouslyAskedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
