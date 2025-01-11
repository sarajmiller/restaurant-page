export function renderHeader() {
        // initialize constants for the body and the content from the template
        const body = document.querySelector('body')
        const content = document.getElementById('content')
        
        // create background and add it to the body
        const background = document.createElement("div");
        background.id = "background";
        body.prepend(background);
    
        // create a header and use an array and for loop to create navbar items
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        const li = document.createElement("li");
    
        const navItems = ["Home", "Menu", "Contact"];
    
        navItems.forEach((item) => {
            const ul = document.createElement("ul");
            ul.id = item;
            ul.textContent = item;
            li.appendChild(ul);
        })
    
        nav.appendChild(li);
        header.appendChild(nav);
        body.prepend(header);
}