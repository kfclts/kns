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
  selectedTags: string[] = []; // 存储选中的标签

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterByTag(tag: string): void {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    }
    this.applyFilters();
  }

  removeTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    if (this.selectedTags.length > 0) {
      this.filteredProducts = this.products.filter(product =>
        this.selectedTags.every(tag => product.tag.includes(tag))
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
