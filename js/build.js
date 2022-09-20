export function createNav(h) {
    const header = h || document.querySelector("header"),
        nav = document.createElement("nav"),
        fbContainer = document.createElement("ul"),
        li1 = document.createElement("li"),
        btn1 = document.createElement("button"),
        a1 = document.createElement("a"),
        li2 = document.createElement("li"),
        btn2 = document.createElement("button"),
        a2 = document.createElement("a");

    fbContainer.classList.add("navbar-container");
    btn1.classList.add("nav-btn", "nav-btn-async");
    btn1.setAttribute("type", "button");
    a1.setAttribute("href", "index.html");
    a1.innerText = "AsyncPro";
    btn2.classList.add("nav-btn", "nav-btn-classproto");
    btn2.setAttribute("type", "button");
    a2.setAttribute("href", "classproto.html");
    a2.innerText = "ClassProto";

    btn1.append(a1);
    li1.append(btn1);
    btn2.append(a2);
    li2.append(btn2);
    fbContainer.append(li1, li2);
    nav.append(fbContainer);

    header.append(nav);
}
