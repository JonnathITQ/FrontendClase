import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FootComponent } from '../../components/foot/foot.component';

@Component({
  selector: 'app-contact',
  imports: [NavComponent, FootComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
