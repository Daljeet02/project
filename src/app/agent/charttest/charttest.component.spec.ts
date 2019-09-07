import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttestComponent } from './charttest.component';

describe('CharttestComponent', () => {
  let component: CharttestComponent;
  let fixture: ComponentFixture<CharttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
