import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';

import {MenuComponent} from "./menu.component";
import {MenuRoutingModule} from "./menu-routing.module";
import {MenuItemModule} from "./menu-item/menu-item.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MenuItemModule,
        MenuRoutingModule
    ],
    declarations: [MenuComponent],
    providers: [],
})
export class MenuModule {
}
