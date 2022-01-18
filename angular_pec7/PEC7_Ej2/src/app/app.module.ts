import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { WineItemComponent } from './wines/wine-item/wine-item.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineNewComponent } from './wines/wine-new/wine-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineService } from './services/wine.service';
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';
import { WineAppInterceptorService } from './services/wine-app-interceptor.service';
import { ImageWinePipe } from './pipes/image-wine.pipe';

import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    ImageWinePipe,
    
    WineDetailComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // NgModel
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule,
    //NgbModule,
    


  ],
  providers: [
    WineService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptorService,
      multi: true,
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
