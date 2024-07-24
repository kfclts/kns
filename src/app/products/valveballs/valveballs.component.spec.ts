import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValveballsComponent } from './valveballs.component';

describe('ValveballComponent', () => {
  let component: ValveballsComponent;
  let fixture: ComponentFixture<ValveballsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValveballsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValveballsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
