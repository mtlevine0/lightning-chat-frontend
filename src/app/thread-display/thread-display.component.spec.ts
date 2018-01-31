import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDisplayComponent } from './thread-display.component';

describe('ThreadDisplayComponent', () => {
  let component: ThreadDisplayComponent;
  let fixture: ComponentFixture<ThreadDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
