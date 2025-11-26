import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { Art1Component } from './components/art1/art1.component';
import { Art2Component } from './components/art2/art2.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CrudComponent } from './panel/crud/crud.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'form', component: FormComponent },
    { path: 'nav', component: NavComponent },
    { path: 'foot', component: FootComponent },
    { path: 'art1', component: Art1Component },
    { path: 'art2', component: Art2Component },
    { path: 'productos', component: ProductosComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'contact', component: ContactComponent }

];
