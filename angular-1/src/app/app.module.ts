import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./services/interceptors/error.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import { IbanPipe } from './services/pipes/iban.pipe';
import {RouterModule, Routes} from "@angular/router";
import { ErrorComponent } from './errors/error/error.component';
import { AppComponent as MainComponent } from './pages/app/app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'app', component: MainComponent},
  {path:'extra', loadChildren: () => import('./pages/extra-page/extra-page.module').then(m => m.ExtraPageModule)},
  {path:'error', component: ErrorComponent},
  {path:'', redirectTo: 'app', pathMatch: 'full'},
  {path:'**', redirectTo: 'error'}
];

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    BoxComponent,
    IbanPipe,
    ErrorComponent,
    HeaderComponent
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
