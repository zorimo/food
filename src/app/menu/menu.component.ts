import {Component, OnInit} from '@angular/core';

import {MENU_ITEMS} from "../menu";
import {MenuItem, MenuItems} from "./menu-item/menu-item.model";

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})

export class MenuComponent implements OnInit {

    menuItems: MenuItems = [];

    constructor() {
        this.menuItems = MENU_ITEMS;
    }

    ngOnInit() {
    }

    search(name: string, course: string): void {
        const menuItems: MenuItems = [];

        MENU_ITEMS.forEach((item: MenuItem) => {
            if (
                item.name.toLowerCase().includes(name.toLowerCase()) &&
                item.type.toLowerCase().includes(course.toLowerCase())
            ) {
                menuItems.push(item);
            }
        });

        this.menuItems = menuItems;
    }

    trackByFn(index, item) {
        return index;
    }
}
