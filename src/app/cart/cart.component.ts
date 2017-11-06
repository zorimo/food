import {Component, OnInit} from '@angular/core';

import {MenuItem, MenuItems} from "../menu/menu-item/menu-item.model";
import {CartService} from "./cart.service";

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss']
})

export class CartComponent implements OnInit {

    private _menuItems: MenuItems = [];

    grandTotalPrice: number;

    constructor(private cartService: CartService) {
        this.menuItems = this.getMenuItems();
    }

    ngOnInit() {
        this.grandTotalPrice = this.cartService.calculateTotalPrice(this.menuItems);
    }

    getMenuItems(): MenuItems {
        return this.cartService.getMenuItems();
    }

    menuItemEdit(menuItem: MenuItem) {
        let quantity: number = 1;

        if (menuItem.quantity > 1) {
            quantity = menuItem.quantity;
        }

        menuItem.totalPrice = Number((quantity * menuItem.price).toFixed(2));
        this.cartService.updateMenuItem(menuItem.id, menuItem);
        this.menuItems = this.cartService.getMenuItems();
    }

    onRemove(id: number): void {
        this.cartService.removeMenuItem(id);
        this.menuItems = this.cartService.getMenuItems();
    }

    trackByFn(index, item) {
        return index;
    }

    get menuItems(): MenuItems {
        return this._menuItems;
    }

    set menuItems(value: MenuItems) {
        this._menuItems = value;
        this.grandTotalPrice = this.cartService.calculateTotalPrice(this.menuItems);
    }

    get isMenuItems(): boolean {
        return this.menuItems.length > 0;
    }
}
