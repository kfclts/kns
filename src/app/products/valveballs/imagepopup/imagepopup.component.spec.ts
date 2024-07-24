import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePopupComponent } from './imagepopup.component';

describe('ImagepopupComponent', () => {
  let component: ImagePopupComponent;
  let fixture: ComponentFixture<ImagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
