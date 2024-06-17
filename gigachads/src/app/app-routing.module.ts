import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/notFound/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AlcoDetailComponent } from './pages/alco-detail/alco-detail.component'
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'catalogue/alco_detail/:id', component: AlcoDetailComponent },
  {path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
