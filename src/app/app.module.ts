import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrandFooterComponent } from './brand-footer/brand-footer.component';
import { BrandHeaderComponent } from './brand-header/brand-header.component';

const version = '1';
console.log('(╯°□°)╯︵ ┻━┻: version', version);

@NgModule({
  declarations: [
    AppComponent,
    BrandHeaderComponent,
    BrandFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
  ],
  bootstrap: [
    AppComponent,
    BrandHeaderComponent,
    BrandFooterComponent
  ]
})
export class AppModule { }
