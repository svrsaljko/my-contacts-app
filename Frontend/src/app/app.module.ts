import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterContainerComponent } from './components/center-container/center-container.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactEffectService } from '../app/services/contact.effect';
import { reducer } from './reducers/contact.reducer';
import { ContactManagerBarComponent } from './components/contact-manager-bar/contact-manager-bar.component';
import { ContactUpdateFormComponent } from './components/contact-update-form/contact-update-form.component';
import { ContactCreateFormComponent } from './components/contact-create-form/contact-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterContainerComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactsListComponent,
    ContactManagerBarComponent,
    ContactUpdateFormComponent,
    ContactCreateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({
      contacts: reducer,
    }),
    EffectsModule.forRoot([ContactEffectService]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
