import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserPageCreatorComponent } from './user-page-creator/user-page-creator.component';
import { NewPageNameDataService } from './new-page-name-data.service';

import { FormsModule } from '@angular/forms';
import { MyAutoFocusDirective } from './my-auto-focus.directive';
import { UserPageDetailsComponent } from './user-page-details/user-page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserPageCreatorComponent,
    MyAutoFocusDirective,
    UserPageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewPageNameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
