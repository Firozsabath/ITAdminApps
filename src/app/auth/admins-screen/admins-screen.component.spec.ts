import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsScreenComponent } from './admins-screen.component';

describe('AdminsScreenComponent', () => {
  let component: AdminsScreenComponent;
  let fixture: ComponentFixture<AdminsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
