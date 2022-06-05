import '../css/app.css'

const SIDEBAR = document.querySelector('.sidebar'),
    SIDEBAR_TOGGLE_BTN = document.querySelector(".sidebar__toggle-btn"),
    SIDEBAR_LIST_ITEMS = document.querySelectorAll(":not(.dropdown-container)> .sidebar-list > .sidebar-list__item"),
    SIDEBAR_DROPDOWNS_INITIATORS = document.querySelectorAll(".sidebar-list__item > .sidebar__page-link[data-dropdown]")

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

SIDEBAR_DROPDOWNS_INITIATORS.forEach(initiator => {
    initiator.addEventListener("click", (e) => {
        if (SIDEBAR.classList.contains("sidebar_mode_compact")) return;
        const openedDropdown = document.querySelector("[data-dropdown='open']");
        if (openedDropdown)  openedDropdown.dataset.dropdown = "close";

        if (e.currentTarget != openedDropdown) {
            e.currentTarget.dataset.dropdown == "open" ?e.currentTarget.dataset.dropdown = "close" : e.currentTarget.dataset.dropdown = "open"
        }
    })
})