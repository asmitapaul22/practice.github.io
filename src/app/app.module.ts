import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MypipePipe } from './mypipe.pipe';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
// import {MyserviceService} from './myservice.service';
@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    HeaderComponent,
    StudentComponent,
    StudentdetailsComponent,
    PagenotfoundComponent,
    StudentregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor()
  {
    console.log("hi this is a module");
  }
 }
