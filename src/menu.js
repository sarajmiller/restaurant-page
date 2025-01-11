import goldenApple from "./images/golden_apple.png"
import glisteringMelon from "./images/glistering_melon_slice.png"
import fishingRod from "./images/fishing_rod.png"

export function renderMenu() {
    
    const contentHeader = document.createElement("div");
    contentHeader.id = "content-header";
    contentHeader.textContent = "⊹₊⁺⋆.˚₊+ Menu +₊˚.⋆⁺₊⊹"

    content.append(contentHeader);

    // const title = document.createElement("p");
    // title.classList.add('title');
    // title.textContent = "Sara's Cottage - Menu";

    // content.append(title);

    // create menu items
    const menuItems = document.createElement("div");
    menuItems.id = "menu-items";

    // Menu items array
    const items = [
        {
            title: "Golden Apple",
            description: "Enchanted with Deliciousness V, this golden apple is crisp and instantly refreshing.",
            price: "5 diamonds",
            image: goldenApple,
        },
        {
            title: "Glistering Melon",
            description: "Shiny and sweet, the glistering melon slice is both soothing and healing.",
            price: "3 diamonds",
            image: glisteringMelon,
        },
        {
            title: "Fishing Rod",
            description: "Buy a girl eat fish, she day. Teach fish girl, to a lifetime.",
            extra: "Enchanted with Luck of the Sea III, Mending I, and Lure III, who knows what kinds of sweet treats you will obtain?",
            price: "20 diamonds",
            image: fishingRod,
        },
    ];

    items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const description = document.createElement("div");
        description.className = "description";

        const h1 = document.createElement("h1");
        h1.textContent = item.title;
        description.appendChild(h1);

        const p1 = document.createElement("p");
        p1.textContent = item.description;
        description.appendChild(p1);

        const menuBreak = document.createElement("div")
        menuBreak.classList.add("menu-break");
        description.appendChild(menuBreak);

        if (item.extra) {
            const pExtra = document.createElement("p");
            pExtra.textContent = item.extra;
            description.appendChild(pExtra);

            const menuBreak = document.createElement("div")
            menuBreak.classList.add("menu-break");
            description.appendChild(menuBreak);
        }

        const price = document.createElement("p");
        price.textContent = `Price: ${item.price}`;
        description.appendChild(price);

        menuItem.appendChild(description);

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        menuItem.appendChild(img);

        menuItems.appendChild(menuItem);
    });

    content.appendChild(menuItems);

}