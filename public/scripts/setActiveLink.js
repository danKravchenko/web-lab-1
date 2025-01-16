var pathName = window.location.pathname;
var headerLinks = document.querySelector(".header-links-list");
var links = Object.values(headerLinks.getElementsByTagName("a"));

links.forEach((link) => {
    if (link.getAttribute("href") == pathName) {
        link.setAttribute("class", "active-link");
    }
});