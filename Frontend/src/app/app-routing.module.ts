import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactUpdateFormComponent } from './components/contact-update-form/contact-update-form.component';

const routes: Routes = [
  {
    path: 'contact/list',
    component: ContactsListComponent,
  },
  {
    path: '',
    redirectTo: 'contact/list',
    pathMatch: 'full',
  },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact/update/:id', component: ContactUpdateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
