document.querySelector("button.conver-download").addEventListener("click", () => {
    document.querySelector("dialog.converter").showModal();
    document.querySelector("button.conver-download").setAttribute("hidden", "");
});
document.querySelector("button[title=\"fermer\"]").addEventListener("click", () => {
    document.querySelector("dialog.converter").close();
    document.querySelector("button.conver-download").removeAttribute("hidden");
});
