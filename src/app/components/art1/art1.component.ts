import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art1.component.html',
  styleUrl: './art1.component.css'
})
export class Art1Component {
  tiendas = [
    { src: 'assets/tiendas/cebiches.jpg', alt: 'Cebiches de la Rumiñahui' },
    { src: 'assets/tiendas/deprati.jpg', alt: 'DePrati' },
    { src: 'assets/tiendas/japon.jpeg', alt: 'Japón' },
    { src: 'assets/tiendas/kfc.jpg', alt: 'KFC' },
    { src: 'assets/tiendas/palmeras.jpg', alt: 'Las Palmeras' },
    { src: 'assets/tiendas/sukasa.jpeg', alt: 'Sukasa' },
    { src: 'assets/tiendas/tablita.jpeg', alt: 'La Tablita del Tártaro' }
  ];
}
