import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-imagepopup',
  templateUrl: './imagepopup.component.html',
  styleUrl: './imagepopup.component.css'
})
export class ImagePopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { image: string }) {}
}
