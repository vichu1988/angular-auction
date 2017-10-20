import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'offer/details/:offerID',
    loadChildren: 'app/pages/details/details.module#DetailsModule'
  },
  {
    path: 'offers/location/:locationID',
    loadChildren: 'app/pages/location/location.module#LocationModule'
  },
  {
    path: 'offers/category/:categoryID',
    loadChildren: 'app/pages/category/category.module#CategoryModule'
  },
  {
    path: 'offers/register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  },
  {
    path: 'not-found',
    loadChildren: 'app/pages/not-found/not-found.module#NotFoundModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
