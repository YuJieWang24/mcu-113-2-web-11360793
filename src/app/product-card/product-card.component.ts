import { Product } from './../../assets/code/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  productName = '書籍 A';
  autor = '作者甲、作者乙、作者丙';
  company = '柏碩文化';
}
