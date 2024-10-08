const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
// console.log(mainEl);
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((obj) => {
  let linkEl = document.createElement("a");
  linkEl.href = obj.href;
  linkEl.textContent = obj.text;
  topMenuEl.appendChild(linkEl);
});

let topMenuLinks = topMenuEl.querySelectorAll("a");

function removeActive() {
  //helper function for removing the active class
  topMenuLinks.forEach((link) => link.classList.remove("active"));
  subMenuEl.style.top = "0";
}

function mainElTitle(event) {
  //function for mainEL manipulation
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  mainEl.style.textTransform = "capitalize";
}
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName !== "A") return;
  if (event.target.classList.contains("active")) {
    removeActive();
  } else {
    removeActive();
    event.target.classList.add("active");

    const selectedLink = menuLinks.find(
      (link) => link.text === event.target.textContent && link.subLinks
    );
    if (selectedLink) {
      subMenuEl.style.top = "100%";
    } else if (selectedLink === undefined) {
      mainElTitle(event);
      removeActive();
    }
    function buildSubMenu(menuLinks) {
      subMenuEl.innerHTML = "";
      menuLinks.forEach((obj) => {
        if (
          obj.text === event.target.textContent &&
          event.target.textContent !== "about"
        ) {
          obj.subLinks.forEach((link) => {
            let subLinkEl = document.createElement("a");
            subLinkEl.href = link.href;
            subLinkEl.textContent = link.text;
            subMenuEl.appendChild(subLinkEl);
          });
        }
      });
    }
    buildSubMenu(menuLinks);
  }
});

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  const selectedLink = menuLinks.find((link) => link.text && link.subLinks);
  if (selectedLink) {
    mainElTitle(event);
  }
  removeActive();
});
