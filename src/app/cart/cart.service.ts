import {Injectable} from '@angular/core';

import {MenuItem, MenuItems} from "../menu/menu-item/menu-item.model";

const CART: string = 'cart';

@Injectable()
export class CartService {

    constructor() {
    }

    getMenuItems(): MenuItems {
        return localStorage.getItem(CART) ? JSON.parse(localStorage.getItem(CART)) : [];
    }

    getMenuItem(id: number): MenuItem {
        return this.getMenuItems().find(i => i.id === id);
    }

    setMenuItems(menuItems: MenuItems): void {
        localStorage.setItem(CART, JSON.stringify(menuItems));
    }

    updateMenuItem(id: number, menuItem: MenuItem): void {
        const menuItems: MenuItems = this.getMenuItems();

        menuItems.forEach(
            (item: MenuItem, i: number, self) => {
                if (item.id === id) {
                    self[i] = menuItem;
                }
            }
        );

        this.setMenuItems(menuItems);
    }

    addMenuItem(menuItem: MenuItem): void {
        if (this.getMenuItem(menuItem.id)) {
            this.updateMenuItem(menuItem.id, menuItem);
        } else {
            this.setMenuItems(this.getMenuItems().concat(menuItem));
        }
    }

    removeMenuItem(id: number): void {
        const menuItems: MenuItems = this.getMenuItems();

        menuItems.forEach(
            (item: MenuItem, i: number, self) => {
                if (item.id === id) {
                    self.splice(i, 1);
                }
            }
        );

        this.setMenuItems(menuItems);
    }

    calculateTotalPrice(menuItems: MenuItems): number {
        return Number(menuItems.reduce((sum: number, menuItem: MenuItem) => {
            return sum + menuItem.totalPrice;
        }, 0).toFixed(2));
    }
}
