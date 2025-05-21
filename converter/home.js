var openAppClick = false;
document.querySelector("button.conver-download").addEventListener("click", () => {
    document.querySelector("dialog.converter").showModal();
    document.querySelector("button.conver-download").setAttribute("hidden", "");
});
document.querySelector("button[title=\"fermer\"]").addEventListener("click", () => {
    document.querySelector("dialog.converter").close();
    document.querySelector("button.conver-download").removeAttribute("hidden");
});
document.querySelector("button[title=\"fermer la fenêtre\"]").addEventListener("click", () => {
    document.querySelector("dialog.converter").close();
    document.querySelector("button.conver-download").removeAttribute("hidden");
});
document.querySelector("a[href=\"/instal/converter/Video Covert_Tools.exe\"]").addEventListener("click", () => {
    if (document.querySelector("input.check").checked) {
        setTimeout(() => {
            document.querySelector("dialog.converter").close();
            document.querySelector("button.conver-download").removeAttribute("hidden");
        }, 1000)
    }
})
document.querySelector("a[href=\"/instal/converter/AMVConverter.zip\"]").addEventListener("click", () => {
    if (document.querySelector("input.check").checked) {
        setTimeout(() => {
            document.querySelector("dialog.converter").close();
            document.querySelector("button.conver-download").removeAttribute("hidden");
        }, 1000)
    }
})
