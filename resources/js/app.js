import '../css/app.css'

const COMPACT_WIDTH = 4;
const SIDEBAR = document.querySelector('.sidebar'),
    SIDEBAR_TOGGLE_BTN = document.querySelector(".sidebar__toggle-btn"),
    SIDEBAR_LIST_ITEMS = document.querySelectorAll(".sidebar-list__item");

SIDEBAR_TOGGLE_BTN.addEventListener("click", () => {
    SIDEBAR.classList.toggle("sidebar_mode_compact");

    if (SIDEBAR.classList.contains("sidebar_mode_compact")) {
        SIDEBAR_TOGGLE_BTN.textContent = ">|";
        SIDEBAR_LIST_ITEMS.forEach(item => item.classList.add("sidebar-list__item_mode_compact"))
    } else {
        SIDEBAR_TOGGLE_BTN.textContent = "|<";
        SIDEBAR_LIST_ITEMS.forEach(item => item.classList.remove("sidebar-list__item_mode_compact"))
    }
})
