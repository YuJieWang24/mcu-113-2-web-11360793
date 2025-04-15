import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productName = '書籍 A';
  author = '作者甲、作者乙、作者丙';
  company = '柏碩文化';

  isShow = true;

  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  createDate = new Date('2025/4/9');

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
