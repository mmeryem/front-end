import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateNavireComponent } from './create-navire/create-navire.component';
import { NavireListComponent } from './navire-list/navire-list.component';
import { NavireDetailComponent } from './navire-detail/navire-detail.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateNavireComponent,
    NavireListComponent,
    NavireDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    NgToastModule,
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
