import {Routes} from '@angular/router';

import {AboutComponent} from './about';
import {NoContentComponent} from './no-content';

export const ROUTES: Routes = [
    {path: '', loadChildren: './menu/menu.module#MenuModule'},
    {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
    {path: '**', component: NoContentComponent},
];
