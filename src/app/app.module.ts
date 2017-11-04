import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DateTimePickerModule } from 'ng-pick-datetime';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//csv
import { Ng2CsvModule } from 'ng2csv/Ng2Csv.module';


import { AppComponent } from './app.component';
//router
import { routing, appRoutesProviders } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeticionesComponent } from './peticiones/peticiones.component';

//servicios
import {LoginService} from './services/login.service';
import {OperacionesService} from './services/operaciones.service';
import { PeticionesEditComponent } from './peticiones-edit/peticiones-edit.component';
import { SociosComponent } from './socios/socios.component';
import { SociosDetComponent } from './socios-det/socios-det.component';
import { RecibosComponent } from './recibos/recibos.component';
import { RecibosDetComponent } from './recibos-det/recibos-det.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { RemesasComponent } from './remesas/remesas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PeticionesComponent,
    PeticionesEditComponent,
    SociosComponent,
    SociosDetComponent,
    RecibosComponent,
    RecibosDetComponent,
    InicioComponent,
    ErrorComponent,
    RemesasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    Ng2CsvModule,
    routing
  ],
  providers: [
    LoginService,
    OperacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
