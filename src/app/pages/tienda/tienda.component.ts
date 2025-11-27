import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FootComponent } from '../../components/foot/foot.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TiendaService } from '../../services/tienda.service';
import { Tiendas } from '../../models/Tiendas';
import { Router } from '@angular/router';
import { Global } from '../../services/global';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tienda',
  imports: [NavComponent, FootComponent, CommonModule, FormsModule, RouterModule, HttpClientModule],
  standalone: true,
  providers: [TiendaService],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit {
  public tiendas: Tiendas[];
  public url: string;
  public tienda: Tiendas;
  public confirmId: string | null;

  constructor(
    private _tiendaService: TiendaService,
    private _router: Router,
    private _route: ActivatedRoute,

  ) {
    this.url = Global.url;
    this.tiendas = [];
    this.tienda = new Tiendas('', '', '', 4, '', '');
    this.confirmId = null;
  }

  ngOnInit(): void {
    this.getTiendas();
    this._route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        console.log(id);
        this.getTienda(id);
      }
    });
  }

  getTiendas() {
    this._tiendaService.getTiendas().subscribe(response => {
      if (response.tiendas) {
        this.tiendas = response.tiendas;
      }
    },
      error => {
        console.log(<any>error);
      }
    );
  }

  getTienda(id: String) {
    this._tiendaService.getTienda(id).subscribe(response => {
      this.tienda = response.tienda;
    },
      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirm(id: string | null) {
    this.confirmId = id;
  }

  borrarProducto(id: String) {
    this._tiendaService.deleteTienda(id).subscribe(response => {
      if (response.tienda) {
        this._router.navigate(['../tienda']);
      }
    },
      error => {
        console.log(<any>error);
      }
    );
  }

}
