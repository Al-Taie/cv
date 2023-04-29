
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section.resume-section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSectionIndex = index;
        }
    });

    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[currentSectionIndex].classList.add("active");
});

function revealEmail() {
    let emailAddress = "ahmedmones98@gmail.com";
    let linkElement = document.getElementById("contact-me");
    linkElement.setAttribute("href", "mailto:" + emailAddress);
    linkElement.textContent = emailAddress;
}
