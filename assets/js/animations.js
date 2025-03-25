function fadeInElements() {
    const elements = document.querySelectorAll(".product");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 100);
    });
}
