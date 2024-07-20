import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-valve-balls',
  templateUrl: './valve-balls.component.html',
  styleUrl: './valve-balls.component.css'
})
export class ValveBallsComponent {
  groupedProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.groupProductsByName();
  }

  groupProductsByName(): void {
    const products = this.productService.getProducts();
    const grouped: Record<string, Product[]> = {};  // Use Record type here
    products.forEach(product => {
      (grouped[product.name] = grouped[product.name] || []).push(product);
    });
    this.groupedProducts = Object.keys(grouped).map(name => ({ name, products: grouped[name] }));
  }
}
