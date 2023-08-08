import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { BotonComponent } from './components/boton/boton.component';



@NgModule({
  declarations: [
    HomePageComponent,
    BotonComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    HomePageComponent
  ]
})
export class BotonesModule { }
