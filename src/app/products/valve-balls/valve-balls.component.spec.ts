import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValveBallsComponent } from './valve-balls.component';

describe('ValveBallsComponent', () => {
  let component: ValveBallsComponent;
  let fixture: ComponentFixture<ValveBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValveBallsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValveBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
