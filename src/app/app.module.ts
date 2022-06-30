import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaMusicaComponent } from './components/lista-musica/lista-musica.component';

// angular material
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from "@angular/material/icon";
import { MisFavoritosComponent } from './components/mis-favoritos/mis-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaMusicaComponent,
    MisFavoritosComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
