import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-sanitary-fittings',
  templateUrl: './sanitary-fittings.component.html',
  styleUrl: './sanitary-fittings.component.css'
})
export class SanitaryFittingsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterByTag(tag: string): void {
    this.filteredProducts = this.products.filter(product => product.tag.includes(tag));
  }
}
