import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SizeChartComponent } from './size-chart/size-chart.component';
import { AvailableColoursComponent } from './available-colours/available-colours.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { DelivaryDetailsComponent } from './delivary-details/delivary-details.component';
import { OtherPlatformsComponent } from './other-platforms/other-platforms.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, ProductDetailsComponent, SizeChartComponent, AvailableColoursComponent,
    OtherDetailsComponent, SellerDetailsComponent, DelivaryDetailsComponent, OtherPlatformsComponent, ReviewsComponent, RecommendedProductsComponent],
  templateUrl: './app.component.html',
 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
