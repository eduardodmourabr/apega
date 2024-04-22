import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { GaasComponent } from './pages/gaas/gaas.component';
import { Faq2Component } from './components/faq2/faq2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'gaas', component: GaasComponent },
  { path: 'faq', component: Faq2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
