import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudStatusComponent } from './stud-status.component';

describe('StudStatusComponent', () => {
  let component: StudStatusComponent;
  let fixture: ComponentFixture<StudStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
