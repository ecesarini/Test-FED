export function createNav(obj, h) {
    const header = h || document.querySelector("header"),
        nav = document.createElement("nav"),
        fbContainer = document.createElement("ul");
    
    fbContainer.classList.add("navbar-container");

    for(let i=0; i<obj.class.length; i++) {
        const li = document.createElement("li"),
            btn = document.createElement("button"),
            a = document.createElement("a");
        
        obj.class[i].forEach(cl => btn.classList.add(cl));
        btn.setAttribute("type", "button");
        a.innerText = obj.text[i];
        a.setAttribute("href", obj.aLink[i]);

        btn.append(a);
        li.append(btn);
        fbContainer.append(li);
    }


    nav.append(fbContainer);
    header.append(nav);
}
