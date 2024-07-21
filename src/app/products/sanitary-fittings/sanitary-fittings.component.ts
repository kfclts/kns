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
  searchQuery: string = ''; // Stores the search query

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
    this.filteredProducts = this.products.filter(product =>
      (this.searchQuery ? product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || product.code.toLowerCase().includes(this.searchQuery.toLowerCase()) : true) &&
      (this.selectedTags.length > 0 ? this.selectedTags.every(tag => product.tag.includes(tag)) : true)
    );
    // console.log('Filtered products:', this.filteredProducts); // 查看过滤后的产品列表
  }

  applySearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    // console.log('Search query received:', query); // 添加此行以检查输入值
    this.searchQuery = query;
    this.applyFilters();
  }
}
