import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      code: 'LJ15315A - 1 1/2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      tubeSize: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings", "tag3", "tag4","tag5"],
    },
    {
      code: 'LJ15315A - 2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      tubeSize: '1 1/2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20315A - 2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20135AP',
      name: 'Adjustable Rail Support Flat "Internal Fit"',
      tubeSize: '2" x FLAT',
      photo: "products/LJ20135AP.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20136A - 2',
      name: 'Adjustable Rail Support Radius "External Fit"',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20136AP',
      name: 'Adjustable Rail Support Flat "External Fit"',
      tubeSize: '2"x FLAT',
      photo: "products/LJ20136AP.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15710RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15710RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '1 1/2"x R 2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20710RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '2"x R 1 1/2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20710RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15711RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 2',
      tubeSize: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15711RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20711RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 2',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15711RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: '',
      name: '',
      tubeSize: '',
      photo: "products/.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: '',
      name: '',
      tubeSize: '',
      photo: "products/.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },

    // 更多产品
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
