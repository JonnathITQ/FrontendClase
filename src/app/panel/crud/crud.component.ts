import { Component, viewChild, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FootComponent } from '../../components/foot/foot.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TiendaService } from '../../services/tienda.service';
import { Tiendas } from '../../models/Tiendas';
import { CargarService } from '../../services/cargar.service';
import { Global } from '../../services/global';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-crud',
  imports: [NavComponent, FootComponent, FormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
  providers: [TiendaService, CargarService],
  standalone: true
})
export class CrudComponent implements OnInit {

  public titulo: string;
  public tienda: Tiendas;
  public tiendasGuardar: Tiendas[];
  public url: string;
  public archivosParaCargar: Array<File>;
  @ViewChild('fileInput') fileInput: any;
  public status: string;
  public idGuardado: string;

  constructor(
    private _tiendaService: TiendaService,
    private _cargarService: CargarService,
  ){

    this.titulo = 'Nueva Tienda para CCI';
    this.url = Global.url;
    this.tienda = new Tiendas('', '', '', 4, '', '',);
    this.tiendasGuardar = [];
    this.archivosParaCargar = [];
    this.status = '';
    this.idGuardado = '';
  }

  ngOnInit(): void {
  }

  guardarTienda(form: NgForm){
    this._tiendaService.saveTienda(this.tienda).subscribe(
      response => {
        if(response.tienda){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url + 'subir-imagen/' + response.tienda._id, [], this.archivosParaCargar, 'imagen')
            .then((result: any) =>{
              this.tiendasGuardar = result.response;
              this.status = 'success';
              console.log(result, this.tienda._id);
              form.reset();
              this.fileInput.nativeElement.value = '';
            });
          }else {
            this.status = 'failed';
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  imagenChangeEvent(fileInput: any){
    this.archivosParaCargar = <Array<File>>fileInput.target.files;
  }



}
