import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {NameComponent} from './name.component';
import {MenuItemComponent} from "./menu-item.component";

@NgModule({
    imports: [
        FormsModule
    ],
    exports: [MenuItemComponent],
    declarations: [MenuItemComponent],
})
export class MenuItemModule {
}
