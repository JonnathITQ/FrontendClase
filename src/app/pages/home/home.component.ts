import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FootComponent } from '../../components/foot/foot.component';
import { Art1Component } from '../../components/art1/art1.component';
import { Art2Component } from '../../components/art2/art2.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, FootComponent, Art1Component, Art2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
