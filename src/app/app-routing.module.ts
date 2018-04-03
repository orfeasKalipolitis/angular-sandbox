import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserPageCreatorComponent } from './user-page-creator/user-page-creator.component';
import { UserPageDetailsComponent } from './user-page-details/user-page-details.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: UserPageCreatorComponent,
    path: 'userPageCreator'
  },
  {
    component: UserPageDetailsComponent,
    path: 'userPage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
