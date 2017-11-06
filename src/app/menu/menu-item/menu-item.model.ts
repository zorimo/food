export enum DishType {
    Snacks = 'Snacks',
    Desserts = 'Desserts',
    Drinks = 'Drinks',
    MainCourses = 'Main courses',
}

export interface MenuItem {
    id: number;
    image: string;
    price: number;
    totalPrice: number;
    currency: string;
    quantity: number;
    name: string;
    description: string;
    type: DishType;
}

export type MenuItems = MenuItem[];
