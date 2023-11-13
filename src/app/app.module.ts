import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { RegistrationComponent } from './page/registration/registrationClient/registration.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeClinetComponent } from './page/client/home-clinet/home-clinet.component';
import { HomeprofissionnelComponent } from './page/profissionnel/homeprofissionnel/homeprofissionnel.component';

import { RegistrationprofissionnelComponent } from './page/registration/registrationprofissionnel/registrationprofissionnel.component';
import { HomeAdminComponent } from './page/admin/home-admin/home-admin.component';
import { AppHttpInterceptor } from './interceptor/app-http.interceptor';
import { TestComponent } from './test/test.component';
import { ProfilclientComponent } from './page/modificationProfil/profilclient/profilclient.component';
import { ProfilprofissionnelComponent } from './page/modificationProfil/profilprofissionnel/profilprofissionnel.component';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { GestionclienteComponent } from './page/admin/gestioncliente/gestioncliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GestionprofissionnelComponent } from './page/admin/gestionprofissionnel/gestionprofissionnel.component';
import { MininavbarComponent } from './composants/mininavbar/mininavbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { SidebarrComponent } from './composants/sidebarr/sidebarr.component';
import { GestionDomaineComponent } from './page/admin/gestion-domaine/gestion-domaine.component';
import { RegistrationDomaineComponent } from './page/registration/registration-domaine/registration-domaine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    RegistrationprofissionnelComponent,
    HomeClinetComponent,
    HomeprofissionnelComponent,
    HomeAdminComponent,
    TestComponent,
    ProfilclientComponent,
    ProfilprofissionnelComponent,
    SidebarComponent,
  
    GestionclienteComponent,
       GestionprofissionnelComponent,
       MininavbarComponent,
       SearchPipe,
       SidebarrComponent,
       GestionDomaineComponent,
       RegistrationDomaineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
