import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuaranComponent } from './pages/quaran/quaran.component';
import { HadithComponent } from './pages/hadith/hadith.component';
import { SalatTimeComponent } from './pages/salat-time/salat-time.component';
import { SunnaComponent } from './pages/sunna/sunna.component';
import { TasfirComponent } from './pages/tasfir/tasfir.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'quaran', component: QuaranComponent},
    {path: 'hadith', component: HadithComponent},
    {path: 'salat-time', component: SalatTimeComponent},
    {path: 'sunna', component: SunnaComponent},
    {path: 'tasfir', component: TasfirComponent},
    {path: 'login', component: LoginComponent}
];
