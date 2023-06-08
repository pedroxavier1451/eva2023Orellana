import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './template/cabecera/cabecera.component';
import { MenuComponent } from './template/menu/menu.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    ListarComponent,
    CrearComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
