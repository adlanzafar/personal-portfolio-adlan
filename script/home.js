// Data Proyek (dipindahkan dari HTML/script.js lama)
const projectData = [
    { title: "WEB DEVELOPMENT", subtitle: "(PHP, PYTHON)", image: "../assets/web_dev_icon.png", link: "projects.html" },
    { title: "MOBILE APPS", subtitle: "(JAVA, KOTLIN)", image: "../assets/mobile_dev_icon.png", link: "projects.html" },
    { title: "FINANCIAL TECH", subtitle: "PROJECTS", image: "../assets/financial_icon.png", link: "projects.html" },
    { title: "SCRIPTING", subtitle: "(PYTHON, C++)", image: "../assets/scripting_icon.png", link: "projects.html" },
    { title: "CONTENT", subtitle: "CREATION", image: "../assets/content_icon.png", link: "projects.html" },
    { title: "OTHER", subtitle: "PROJECTS", image: "../assets/other_icon.png", link: "projects.html" }
];


document.addEventListener("DOMContentLoaded", function () {

    const portfolioGrid = document.querySelector('.portfolio-grid');


    if (portfolioGrid && portfolioGrid.children.length === 0) {

        if (typeof projectData !== 'undefined' && projectData.length > 0) {
            // Loop untuk mengisi grid
            projectData.forEach(project => {
                const gridItemHTML = `
                    <div class="grid-item">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="${project.title}">
                            <span class="title">
                                ${project.title}
                                <br>
                                <small>${project.subtitle}</small>
                            </span>
                        </a>
                    </div>
                `;
                portfolioGrid.innerHTML += gridItemHTML;
            });
        }
    }

    const animatedItems = document.querySelectorAll('.grid-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedItems.forEach(item => {
        observer.observe(item);
    });

});