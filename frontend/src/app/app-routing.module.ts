import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './component/tableau/tableau.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ModifierComponent } from './component/modifier/modifier.component';
import { PageAdminComponent } from './component/page-admin/page-admin.component';


const routes: Routes = [
  { path: 'Users', component: TableauComponent },
  { path: '', component: ConnexionComponent },
  {path: 'inscriptionUser', component: InscriptionComponent},
  { path: 'pageAdmin', component: PageAdminComponent},
  { path: 'modif/:id', component: ModifierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
