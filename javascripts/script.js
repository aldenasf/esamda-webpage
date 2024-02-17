//! Current script is deferred on index.html

document.addEventListener("click", (e) => {
    const isDropdown = e.target.matches("[data-dropdown-button]");

    // returns if the element clicked is the dropdown button (a[data-dropdown-button])
    // and is inside of the dropdown element (li[data-dropdown]).
    // this is to prevent the dropdown closing when interacting with the content
    if (!isDropdown && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;
    if (isDropdown) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((e) => {
        if (e !== currentDropdown) e.classList.remove("active");
    });
});
