import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';



import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

//controles de formulariosa
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

//alertas
import{MatSnackBarModule} from '@angular/material/snack-bar'

//iconos de material
import { MatCommonModule } from '@angular/material/core';

//modales de material
import {MatDialogModule} from '@angular/material/dialog'

//cuadriculas
import {MatGridListModule} from '@angular/material/grid-list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AutorAddEditComponent } from './Autor/ADialogo/autor-dialog-add-edit/autor-add-edit.component';
import { AutorDeleteComponent } from './Autor/ADialogo/autor-delete/autor-delete.component';
import { AutorComponent } from './Autor/autor.component';
import { InicioComponent } from './Inicio/inicio.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AutorNewComponent } from './Autor/ADialogo/autor-dialog-new/autor-new.component';
import { CategoriaAddEditComponent } from './Categoria/CDialogo/categoria-add-edit/categoria-add-edit.component';
import { CategoriaDeleteComponent } from './Categoria/CDialogo/categoria-delete/categoria-delete.component';
import { CategoriaNewComponent } from './Categoria/CDialogo/categoria-new/categoria-new.component';
import { CategoriaComponent } from './Categoria/categoria.component';
import { AlmacenComponent } from './Almacen/almacen.component';
import { AlmacenDeleteComponent } from './Almacen/AlDialogo/almacen-delete/almacen-delete.component';
import { AlmacenAddEditComponent } from './Almacen/AlDialogo/almacen-add-edit/almacen-add-edit.component';
import { TiendaComponent } from './Tienda/tienda.component';
import { TiendaAddEditComponent } from './Tienda/TDialogo/tienda-add-edit/tienda-add-edit.component';
import { TiendaDeleteComponent } from './Tienda/TDialogo/tienda-delete/tienda-delete.component';
import { TiendaNewComponent } from './Tienda/TDialogo/tienda-new/tienda-new.component';
import { AlmacenNewComponent } from './Almacen/AlDialogo/almacen-new/almacen-new.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthInterceptor } from './Services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AutorAddEditComponent,
    AutorDeleteComponent,
    AutorComponent,
    InicioComponent,
    AutorNewComponent,
    CategoriaAddEditComponent,
    CategoriaDeleteComponent,
    CategoriaNewComponent,
    CategoriaComponent,
    AlmacenComponent,
    AlmacenDeleteComponent,
    AlmacenAddEditComponent,
    TiendaComponent,
    TiendaAddEditComponent,
    TiendaDeleteComponent,
    TiendaNewComponent,
    AlmacenNewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatCommonModule,
    MatDialogModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true,}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
