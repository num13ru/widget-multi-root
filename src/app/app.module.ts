import { APP_BASE_HREF } from '@angular/common';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrandFooterComponent } from './brand-footer/brand-footer.component';
import { BrandHeaderComponent } from './brand-header/brand-header.component';

const version = '3';
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
  entryComponents: [
    AppComponent,
    BrandHeaderComponent,
    BrandFooterComponent,
  ],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(app: ApplicationRef) {
    if (/footer/gi.test(window.location.href)) {
      this.bootstrapRootComponent(app, 'brand-footer');
    }

    if (/header/gi.test(window.location.href)) {
      this.bootstrapRootComponent(app, 'brand-header');
    }

    if (/app/gi.test(window.location.href)) {
      this.bootstrapRootComponent(app, 'app-root');
    }
  }

  private bootstrapRootComponent(app: ApplicationRef, name: 'app-root' | 'brand-header' | 'brand-footer') {
    // define the possible bootstrap components
    // with their selectors (html host elements)
    const options = {
      'app-root': AppComponent,
      'brand-header': BrandHeaderComponent,
      'brand-footer': BrandFooterComponent
    };

    const component: any = options[name];
    app.bootstrap(component);
  }
}
