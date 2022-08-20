import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('src/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ':cateType',
    loadChildren: () =>
      import('src/features/catalog/catalog.module').then(
        (m) => m.CatalogModule
      ),
  },
  {
    path: ':cateType/:id',
    loadChildren: () =>
      import('src/features/detail/detail.module').then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
