import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art2.component.html',
  styleUrl: './art2.component.css'
})
export class Art2Component {
  lugares = [
    { src: 'assets/lugares/sitioA.png', alt: 'Zona de Entretenimiento' },
    { src: 'assets/lugares/sitioB.jpg', alt: 'Patio de Comidas' },
    { src: 'assets/lugares/sitioC.jpg', alt: 'Exteriores' },
    { src: 'assets/lugares/sitioD.png', alt: 'Entrada Principal' }
  ];
}
