import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryFittingsComponent } from './sanitary-fittings.component';

describe('SanitaryFittingsComponent', () => {
  let component: SanitaryFittingsComponent;
  let fixture: ComponentFixture<SanitaryFittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanitaryFittingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitaryFittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
