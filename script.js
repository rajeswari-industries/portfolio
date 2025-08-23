document.addEventListener("DOMContentLoaded", function () {
    // Set custom black cursor for the whole document
    document.body.style.cursor =
        "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\"><circle cx=\"16\" cy=\"16\" r=\"8\" fill=\"black\"/></svg>') 16 16, auto";

    // Optional: pointer cursor for hoverables
    const hoverables = document.querySelectorAll("a, button, .project-card, .skill-badge");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => {
            el.style.cursor =
                "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\"><circle cx=\"16\" cy=\"16\" r=\"8\" fill=\"black\"/></svg>') 16 16, pointer";
        });
        el.addEventListener("mouseleave", () => {
            el.style.cursor = "";
        });
    });
});
