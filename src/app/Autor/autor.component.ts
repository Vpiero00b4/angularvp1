import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Autor } from '../Interface/autor'; 
import { AutorService } from '../Services/autor.service';
import { HttpHeaders } from '@angular/common/http';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AutorAddEditComponent } from './ADialogo/autor-dialog-add-edit/autor-add-edit.component';

import { AutorDeleteComponent } from './ADialogo/autor-delete/autor-delete.component';
import { AutorNewComponent } from './ADialogo/autor-dialog-new/autor-new.component';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.scss'
})
export class AutorComponent  implements AfterViewInit,OnInit{
  displayedColumns: string[] = ['descripcion','Acciones'];
  dataSource = new MatTableDataSource<Autor>();
  constructor(
    private _autorServicio:AutorService,
    public dialog: MatDialog,
    private _snackBar:MatSnackBar

    ){
    
  }
  ngOnInit(): void {
    this.mostrarAutor()
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarAutor() {
    
    this._autorServicio.getList().subscribe({
      next: (dataResponse) => {
        this.dataSource.data = dataResponse;
      },
      error: (e) => {
        console.error(e);
      }
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };    
  }

  NuevoAutor() {
    const dialogRef = this.dialog.open(AutorNewComponent, {
      disableClose: true,
      width: "350px",
    });
  
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado === "creado") {
        this.mostrarAutor();
      }
    });
  }
  

  editarAutor(dataAutor:Autor){
    this.dialog.open(AutorAddEditComponent,{
      disableClose:true,
      width:"350px",
      data:dataAutor
    }).afterClosed().subscribe(resultado => {
      if(resultado === "Editado"){
        this.mostrarAutor();
      }
    })
}
mostrarAlerta(msg: string, accion: string) {
  this._snackBar.open(msg, accion,{
    horizontalPosition:"end",
    verticalPosition:"top",
    duration:3000
  })
}

DialogoEliminarComponent(dataAutor:Autor){
  this.dialog.open(AutorDeleteComponent,{
    disableClose:true,
    data:dataAutor
  }).afterClosed().subscribe(resultado => {
    ;
    if( resultado === "Eliminar"){
      this._autorServicio.delete(dataAutor.idAutor).subscribe({
        next:(data)=>{ 
          this.mostrarAlerta("Autor fue Eliminado","Listo");
          this.mostrarAutor();
        },error:(e)=>{ ; console.log(e)}
      })
    }
  })

}
}
