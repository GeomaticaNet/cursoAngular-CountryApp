import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: HomePageComponent
    // },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule),
    },
    {
        // cualquier cosa por defecto redirecciona a la ruta countries
        path: '**',
        redirectTo: 'countries'
    }
]

@NgModule({
    imports: [
        // importamos el entutador principal de nuestra app, en el raiz.
        RouterModule.forRoot(routes),
    ],
    exports: [
        // exportamos el router module para que lo vea el app modulo
        RouterModule,
    ]
})
export class AppRoutingModule { }
