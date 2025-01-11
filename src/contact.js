export function renderContact() {
    const contentHeader = document.createElement("div");
    contentHeader.id = "content-header";
    contentHeader.textContent = "⊹₊⁺⋆.˚₊+ Contact Me +₊˚.⋆⁺₊⊹"

    content.prepend(contentHeader);

    const title = document.createElement("p");
    title.classList.add('title');
    title.textContent = "Thank you for visiting Sara's Cottage! You can use any of these very real methods to contact Sara:";

    content.append(title);

    const contacts = document.createElement("li");
    const contactList = ["Carrier Pigeon to Wisteria Lane", "Owl Post to Wisteria Lane (Weekdays Only)", "Email... If you must: realemail@sara.cottage"];
    contactList.forEach((item) => {
        const ul = document.createElement("ul");
            ul.textContent = item;
            contacts.appendChild(ul);
    });

    content.append(contacts);
}