import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
        path: 'home',
        loadChildren: () => import('src/features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: ':cateType',
        loadChildren: () => import ('src/features/catalog/catalog.module').then(m => m.CatalogModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }