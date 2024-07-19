import { Component, ElementRef, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'https://picsum.photos/id/1018/1000/600/',
    'https://picsum.photos/id/1015/1000/600/',
    'https://picsum.photos/id/1019/1000/600/'
  ];
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  // onActiveIndexChange() {
  //   console.log(this.swiper?.activeIndex);
  // }
}
