import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AvailableColoursComponent } from './components/available-colours/available-colours.component';
import { SizeChartComponent } from './size-chart/size-chart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DelivaryDetailsComponent } from './delivary-details/delivary-details.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableColoursComponent,
    SizeChartComponent,
    ProductDetailsComponent,
    DelivaryDetailsComponent,OtherDetailsComponent,
    OtherDetailsComponent,RecommendedProductsComponent
  ],
  imports: [
    BrowserModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
