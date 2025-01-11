export function renderHomepage() {
    const contentHeader = document.createElement("div");
    contentHeader.id = "content-header";
    contentHeader.textContent = "⊹₊⁺⋆.˚₊+ Sara's Cottage +₊˚.⋆⁺₊⊹"

    content.prepend(contentHeader);

    const title = document.createElement("p");
    title.classList.add('title');
    title.textContent = "Welcome to Sara's Cottage!";

    content.append(title);

    const paragraph = document.createElement("p");
    paragraph.classList.add('paragraph');
    paragraph.textContent = "Thanks for visiting my cozy cottage, created by yours truly, Sara! \
            I hope you enjoy the nice atmosphere during your stay. \
            Sit back, relax, perhaps enjoy a Golden Apple or two while you're here!";

    content.append(paragraph);

    const title2 = document.createElement("p");
    title2.classList.add('title');
    title2.textContent = "Cottage Hours";

    const hours = document.createElement("li");
    const hoursList = ["Monday - Friday: 9am - 6pm", "Saturday - Sunday: 9am - 9pm"];
    hoursList.forEach((item) => {
        const ul = document.createElement("ul");
            ul.textContent = item;
            hours.appendChild(ul);
    });

    content.append(title2);
    content.append(hours);

    const Location = document.createElement("p");
    Location.classList.add('title');
    Location.textContent = "Address";

    const paragraph2 = document.createElement("p");
    paragraph2.classList.add('paragraph');
    paragraph2.textContent = "8080 Wisteria Ln, Cherry Tree Forest, MC"

    content.append(Location);
    content.append(paragraph2);
}