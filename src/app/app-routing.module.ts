import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


const routes: Routes = [
  {path:'index' , component: HomeComponent },
  {path:'registro' , component: RegistroComponent},
  {path:'galeria' , component: GaleriaComponent},
  { path:'**' , pathMatch:'full' , redirectTo:'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
