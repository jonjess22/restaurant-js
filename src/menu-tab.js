export const loadMenuTab = () => {
    const content = document.getElementById("content");
    if (!content) return;

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const menu = document.createElement("div");
    menu.id = "menu";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menü";

    const menuItemsList = document.createElement("ol");

    const pizzaNames = ["Margherita", "Salami", "Hawaii", "Vegetariana"];
    const pizzaSizes = ["Small", "Medium", "Large", "Large"];
    const pizzaToppings = [
        ["Tomato Sauce", "Mozzarella", "Basil"],
        ["Tomato Sauce", "Mozzarella", "Salami"],
        ["Tomato Sauce", "Mozzarella", "Pineapple", "Ham"],
        ["Tomato Sauce", "Mozzarella", "Peppers", "Onions", "Olives"]
    ];
    const pizzaPrices = [5, 7, 9, 8];

    for (let i = 0; i < pizzaNames.length; i++) {
        const menuListItem = document.createElement("li");
        const pizzaItem = pizza(pizzaNames[i], pizzaSizes[i], pizzaToppings[i], pizzaPrices[i]);
        menuListItem.textContent = `${pizzaItem.getName()} (${pizzaItem.getSize()}) - ${pizzaItem.getPrice()}€`;
        menuItemsList.appendChild(menuListItem);
    }

    menu.appendChild(menuTitle);
    menu.appendChild(menuItemsList);
    content.appendChild(menu);
}

const pizza = (function (name, size, toppings, price) {
    const getName = () => name;
    const getSize = () => size;
    const getToppings = () => toppings;
    const getPrice = () => price;

    return { getName, getSize, getToppings, getPrice };
});