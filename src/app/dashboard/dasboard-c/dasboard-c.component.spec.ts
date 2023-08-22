import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardCComponent } from './dasboard-c.component';

describe('DasboardCComponent', () => {
  let component: DasboardCComponent;
  let fixture: ComponentFixture<DasboardCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
