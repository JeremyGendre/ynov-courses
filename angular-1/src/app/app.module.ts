import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./services/interceptors/error.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import { IbanPipe } from './services/pipes/iban.pipe';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent as MainComponent } from './pages/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserApiComponent } from './pages/user-api/user-api.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path:'app', component: MainComponent},
  {path:'user-api', loadChildren: () => import('./pages/user-api/user-api.module').then(m => m.UserApiModule)},
  {path:'error', loadChildren: () => import('./errors/error/error.module').then(m => m.ErrorModule)},
  {path:'', redirectTo: 'app', pathMatch: 'full'},
  {path:'**', redirectTo: 'error'}
];

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    BoxComponent,
    IbanPipe,
    HeaderComponent,
    UserApiComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
