import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge'; 
import { ToastrModule } from 'ngx-toastr';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { ActivateGuard } from './activate.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxSpinnerModule } from "ngx-spinner";
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
  
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularToastifyModule,
    MatBadgeModule,
    ToastrModule.forRoot( {positionClass: 'toast-top-right'}),
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
