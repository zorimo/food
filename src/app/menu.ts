import {DishType, MenuItems} from "./menu/menu-item/menu-item.model";

export const MENU_ITEMS: MenuItems = [
    {
        id: 1,
        image: 'assets/img/tapas.jpeg',
        price: 11.36,
        totalPrice: 1.36,
        currency: '€',
        quantity: 1,
        name: 'Tapas',
        description: `A tapa, in Spanish cuisine, is an appetizer, or snack. It may be cold or hot.
         In select bars in Spain, tapas have evolved into an entire, sophisticated cuisine.`,
        type: DishType.Snacks
    },
    {
        id: 2,
        image: 'assets/img/kebab.jpg',
        price: 8.36,
        totalPrice: 2.36,
        currency: '€',
        quantity: 1,
        name: 'Kebab',
        description: `Kebabs are various cooked meat dishes, with their origins in Middle East.
          In Indian English and in the languages of the Middle East, other parts of Asia, and the Muslim world,
          kebab is a broad term covering a wide variety of grilled meat dishes.`,
        type: DishType.MainCourses
    },
    {
        id: 3,
        image: 'assets/img/tandoori-chicken.jpg',
        price: 10.36,
        totalPrice: 3.36,
        currency: '€',
        quantity: 1,
        name: 'Tandoori chicken',
        description: `Tandoori chicken is chicken prepared as food by roasting, yoghurt and spice marinated chicken,
          in a tandoor, a cylindrical clay oven. It is a popular dish originating from the Indian subcontinent.
          It is popular in India and Pakistan and Bangladesh.`,
        type: DishType.MainCourses
    },
    {
        id: 4,
        image: 'assets/img/tea.jpg',
        price: 1.36,
        totalPrice: 3.36,
        currency: '€',
        quantity: 1,
        name: 'Tea',
        description: `A cream tea is a form of afternoon tea light meal,
         consisting of tea taken with a combination of scones, clotted cream, and jam.`,
        type: DishType.Drinks
    },
    {
        id: 5,
        image: 'assets/img/gelato.jpg',
        price: 1.36,
        totalPrice: 3.36,
        currency: '€',
        quantity: 1,
        name: 'Gelato',
        description: `Gelato is Italian ice cream. Gelato is made with a base of milk, cream, and sugar,
          and flavored with fruit and nut purees and other flavourings. It is generally lower in fat,
          but higher in sugar, than other styles of ice cream.`,
        type: DishType.Desserts
    }
];
