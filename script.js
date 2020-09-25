// Quick Menu Dropdown
const expand = document.getElementById('collapsible').addEventListener('click', showContent);
function showContent() {
    const show = document.getElementById('quickMenuOpt').classList.toggle("show");
}

// Active Menu
const current = location.href;
const menu = document.querySelectorAll('ul li a');
const menuLength = menu.length;

for (i = 0; i < menuLength; i++) {
    if (menu[i].href === current) {
        menu[i].classList.add("active");
    }
}





