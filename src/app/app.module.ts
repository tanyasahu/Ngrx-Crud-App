import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'

@NgModule({
  declarations: [AppComponent, UserFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    UsersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
