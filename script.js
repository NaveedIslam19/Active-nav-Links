const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let ofset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top > ofset && top < ofset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector(`header nav a[href *= ${id}]`).classList.add("active")
            })
        }
    })
}