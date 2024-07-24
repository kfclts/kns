import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from './imagepopup/imagepopup.component';

@Component({
  selector: 'app-valveball',
  templateUrl: './valveballs.component.html',
  styleUrl: './valveballs.component.css'
})
export class ValveballsComponent {
  imageList = [
    { src: 'about/CNC.jpg', alt: 'Valve Ball 1' },
    { src: 'about/valveball.jpg', alt: 'Valve Ball 2' },
    { src: 'banner/DSC_0012.png', alt: 'Valve Ball 3' },
    { src: 'products/valve-balls/DSC_0011.jpg', alt: 'Valve Ball 4' },
    { src: 'products/valve-balls/DSC_0019.jpg', alt: 'Valve Ball 5' },
    { src: 'products/valve-balls/DSC_0024.jpg', alt: 'Valve Ball 6' },
    { src: 'products/valve-balls/DSC_0029.jpg', alt: 'Valve Ball 7' },
    { src: 'products/valve-balls/DSC_0034.jpg', alt: 'Valve Ball 8' },
    { src: 'products/valve-balls/DSC_0035.jpg', alt: 'Valve Ball 9' },
    { src: 'products/valve-balls/DSC_0036.jpg', alt: 'Valve Ball 10' },
    { src: 'products/valve-balls/DSC_0038.jpg', alt: 'Valve Ball 11' },
    { src: 'products/valve-balls/empty-ball-2.jpg', alt: 'Valve Ball 12' },
    { src: 'products/valve-balls/empty-ball.jpg', alt: 'Valve Ball 12' },
    { src: 'products/valve-balls/solid-balls-2.jpg', alt: 'Valve Ball 13' },
    { src: 'products/valve-balls/solid-balls.jpg', alt: 'Valve Ball 14' },
    { src: 'products/valve-balls/valve-ball-list.png', alt: 'Valve Ball 15' },
    // 添加更多圖片
  ];

  constructor(private dialog: MatDialog) { }
  openImagePopup(imageUrl: string): void {
    this.dialog.open(ImagePopupComponent, {
      data: { image: imageUrl },
      panelClass: 'custom-dialog-container'
    });
  }
}
