import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedTags: string[] = []; // 存储选中的标签
  searchQuery: string = ''; // Stores the search query

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      this.selectedTags = params['filter'] ? params['filter'].split(',') : [];  // 确保使用 'filter' 参数
      this.applyFilters();
    });
    const duplicates = this.productService.findDuplicateCodes();
    console.log('Duplicate Product Codes:', duplicates);
  }

  filterByTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index === -1) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(index, 1);  // 如果标签已存在，则移除（可以实现标签的切换功能）
    }
    this.updateQueryParams();  // 确保每次修改标签后都更新URL
  }

  removeTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);  // 从选中标签数组中移除标签
    }
    this.updateQueryParams();  // 更新 URL 查询参数
    this.applyFilters();  // 重新应用过滤条件以更新显示的产品列表
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(
      (product) =>
        (this.searchQuery
          ? product.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          product.code.toLowerCase().includes(this.searchQuery.toLowerCase())
          : true) &&
        (this.selectedTags.length > 0
          ? this.selectedTags.every((tag) => product.tag.includes(tag))
          : true)
    );
    // console.log('Filtered products:', this.filteredProducts); // 查看过滤后的产品列表
  }

  applySearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    this.searchQuery = query;
    this.updateQueryParams();
  }

  updateQueryParams(): void {
    const params: { [key: string]: any } = {};

    params['search'] = this.searchQuery || null;
    // 修改这部分代码来确保当标签数组为空时，'filter' 被从 URL 中移除
    if (this.selectedTags.length > 0) {
      params['filter'] = this.selectedTags.join(',');  // 当标签存在时设置 'filter'
    } else {
      params['filter'] = null;  // 当没有标签时明确移除 'filter'
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'  // 合并查询参数
    });
    this.applyFilters();
  }
}
