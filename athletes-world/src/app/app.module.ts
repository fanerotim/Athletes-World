import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { athleteRoutingModule } from './main/athlete-routing.module';
import { authInterceptorProvider } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    athleteRoutingModule,
    AppRoutingModule,
    CoreModule,
    MainModule,
    UserModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}