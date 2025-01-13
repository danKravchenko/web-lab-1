var header = document.getElementsByTagName("header")[0];
var dorpDownMenu =  document.querySelector(".dropdown-links-list");

setNewValueForProperty();

function setNewValueForProperty(){
    dorpDownMenu.style.setProperty("--top", `${header.offsetHeight}px`);
};

window.addEventListener("resize", () => {
    setNewValueForProperty();
});
