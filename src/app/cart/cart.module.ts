import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';

import {CartComponent} from "./cart.component";
import {CartRoutingModule} from "./cart-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CartRoutingModule
    ],
    declarations: [CartComponent],
})
export class CartModule {
}
