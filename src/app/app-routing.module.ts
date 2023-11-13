import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegistrationComponent } from './page/registration/registrationClient/registration.component';
import { NavbarComponent } from './composants/navbar/navbar.component';

import { HomeClinetComponent } from './page/client/home-clinet/home-clinet.component';
import { HomeprofissionnelComponent } from './page/profissionnel/homeprofissionnel/homeprofissionnel.component';
import { RegistrationprofissionnelComponent } from './page/registration/registrationprofissionnel/registrationprofissionnel.component';
import { HomeAdminComponent } from './page/admin/home-admin/home-admin.component';
import { TestComponent } from './test/test.component';
import { ProfilclientComponent } from './page/modificationProfil/profilclient/profilclient.component';
import { ProfilprofissionnelComponent } from './page/modificationProfil/profilprofissionnel/profilprofissionnel.component';
import { GestionclienteComponent } from './page/admin/gestioncliente/gestioncliente.component';
import { GestionprofissionnelComponent } from './page/admin/gestionprofissionnel/gestionprofissionnel.component';
import { SidebarrComponent } from './composants/sidebarr/sidebarr.component';
import { GestionDomaineComponent } from './page/admin/gestion-domaine/gestion-domaine.component';
import { MininavbarComponent } from './composants/mininavbar/mininavbar.component';
import { RegistrationDomaineComponent } from './page/registration/registration-domaine/registration-domaine.component';

const routes: Routes = [
  {path :"login" , component: LoginComponent},
  {path :"" , component: LoginComponent},
  {path :"registration" , component: RegistrationComponent},
  {path :"navbar" , component: NavbarComponent},
  {path :"registrationProfissionnel" , component: RegistrationprofissionnelComponent},
  {path :"MininavbarComponent" , component: MininavbarComponent},
  {path :"HomeClinet" , component: HomeClinetComponent},
  {path :"Homeprofissionnel" , component: HomeprofissionnelComponent},
  {path :"SidebarrComponent" , component: SidebarrComponent},
  {path :"GestionDomaineComponent" , component: GestionDomaineComponent},
  {path :"Homeadmin" , component: HomeAdminComponent,children:[{
    path :"GestionclienteComponent" , component: GestionclienteComponent},
    {path :"GestionprofissionnelComponent" , component: GestionprofissionnelComponent },
    {path :"GestionDomaineComponent" , component: GestionDomaineComponent},
    {path :"RegistrationDomaineComponent" , component: RegistrationDomaineComponent},
    
  ]},
  {path :"image" , component: TestComponent},
  {path :"profilClinet" , component: ProfilclientComponent},
  {path :"profilProfissionnel" , component: ProfilprofissionnelComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
