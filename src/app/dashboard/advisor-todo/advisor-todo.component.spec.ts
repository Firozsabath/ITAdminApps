import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorTodoComponent } from './advisor-todo.component';

describe('AdvisorTodoComponent', () => {
  let component: AdvisorTodoComponent;
  let fixture: ComponentFixture<AdvisorTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisorTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisorTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
