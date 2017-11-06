import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {MenuItem} from "./menu-item.model";
import {CartService} from "../../cart/cart.service";

@Component({
    selector: 'menu-item',
    templateUrl: 'menu-item.component.html',
    styleUrls: ['menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MenuItemComponent implements OnInit {

    @Input() menuItem: MenuItem = null;

    constructor(public cartService: CartService) {
    }

    ngOnInit() {
    }

    addToCart(): void {
        this.cartService.addMenuItem(this.menuItem);
    }

    menuItemEdit(menuItem: MenuItem) {
        menuItem.totalPrice = Number((menuItem.quantity * menuItem.price).toFixed(2));
    }
}
