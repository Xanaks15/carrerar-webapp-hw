import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

//Angular material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//Componentes
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { TerminosycondicionesScreenComponent } from './screens/terminosycondiciones-screen/terminosycondiciones-screen.component';
import { PoliticasScreenComponent } from './screens/politicas-screen/politicas-screen.component';
import { JugandoScreenComponent } from './screens/jugando-screen/jugando-screen.component';
import { PerfilScreenComponent } from './screens/perfil-screen/perfil-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    HeaderAppComponent,
    LeftSidebarComponent,
    FooterAppComponent,
    BasesPromocionScreenComponent,
    JuegoTerminadoScreenComponent,
    InstruccionesScreenComponent,
    NuevoLookScreenComponent,
    TerminosycondicionesScreenComponent,
    PoliticasScreenComponent,
    JugandoScreenComponent,
    PerfilScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }