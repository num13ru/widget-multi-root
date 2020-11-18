import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrandFooterComponent } from './brand-footer/brand-footer.component';
import { BrandHeaderComponent } from './brand-header/brand-header.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandHeaderComponent,
    BrandFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    BrandHeaderComponent,
    BrandFooterComponent
  ]
})
export class AppModule { }
