import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FootComponent } from '../foot/foot.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TiendaService } from '../../services/tienda.service';
import { CargarService } from '../../services/cargar.service';
import { Tiendas } from '../../models/Tiendas';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [TiendaService, CargarService],
  standalone: true
})
export class FormComponent implements OnInit {
  public nombre: string;
  public tienda: Tiendas;
  public tiendaGuardar: Tiendas;
  public url: string;
  public archivosParaCargar: Array<File>;
  public status: string;
  public idGuardado: string;

  constructor(
    private _tiendaService: TiendaService,
    private _cargarService: CargarService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.nombre = 'Editar Tienda';
    this.url = Global.url;
    this.tienda = new Tiendas('', '', '', 4, '', '',);
    this.tiendaGuardar = new Tiendas('', '', '', 4, '', '',);
    this.archivosParaCargar = [];
    this.status = '';
    this.idGuardado = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this.getTienda(id);
    });
  }

  getTienda(id: String) {
    this._tiendaService.getTienda(id).subscribe(
      response => {
        this.tienda = response.tienda;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  guardarTienda(form: NgForm) {
    this._tiendaService.updateTienda(this.tienda).subscribe(
      response => {
        if (response.tienda) {
          if (this.archivosParaCargar) {
            this._cargarService.
              peticionRequest(Global.url + 'subir-imagen/' + response.tienda._id,
                [], this.archivosParaCargar, 'imagen')
              .then((result: any) => {
                this.tiendaGuardar = result.response;
                this.status = 'success';
                form.reset();
              });
          } else {
            this.tiendaGuardar = response.tienda;
            this.status = 'success';
            form.reset();
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


  imagenChangeEvent(archivoSeleccionado: any) {
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
  }
}
