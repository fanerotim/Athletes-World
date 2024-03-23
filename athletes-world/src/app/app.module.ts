import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { athleteRoutingModule } from './main/athlete-routing.module';
import { authInterceptorProvider } from './auth.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    athleteRoutingModule,
    AppRoutingModule,
    CoreModule,
    MainModule,
    UserModule,
    SharedModule
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}