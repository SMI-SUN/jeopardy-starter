import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjeopardyStarterComponent } from './editjeopardy-starter.component';

describe('EditjeopardyStarterComponent', () => {
  let component: EditjeopardyStarterComponent;
  let fixture: ComponentFixture<EditjeopardyStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjeopardyStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjeopardyStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
