document.addEventListener("DOMContentLoaded", () => {
    new Typed("#typing-text", {
        strings: [
            "Full Stack Web Developer",
            "Frontend Developer",
            "Backend Developer",
            "B.Tech CSE Student",
            "Problem Solver"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1800,
        loop: true
    });
    const navbar = document.getElementById("mainNav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    const progressBar = document.getElementById("progressBar");
    window.addEventListener("scroll", () => {
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const progress =
            (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progress + "%";
    });
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(
                this.getAttribute("href")
            );
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

function animateCursor() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    follower.style.left = posX + "px";
    follower.style.top = posY + "px";
    requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("a,button,.project-card,.contact-card,.btn").forEach(item => {
    item.addEventListener("mouseenter", () => {
        follower.style.width = "60px";
        follower.style.height = "60px";
        follower.style.borderColor = "#FFD700";
    });

    item.addEventListener("mouseleave", () => {
        follower.style.width = "40px";
        follower.style.height = "40px";
        follower.style.borderColor = "#FFD700";
    });
});

const reveals = document.querySelectorAll(
    ".project-card,.about-card,.timeline-item,.skill-item,.contact-card"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            item.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

VanillaTilt.init(
    document.querySelectorAll(".project-card"),
    {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    }
);
const counters = document.querySelectorAll(".stat-box h2");

const runCounter = (counter) => {
    const target = parseInt(counter.innerText);
    let count = 0;
    const speed = target / 80;

    const update = () => {
        if (count < target) {
            count += speed;
            counter.innerText = Math.ceil(count) + "+";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
};

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

const bars = document.querySelectorAll(".progress-bar");

const animateBars = () => {
    bars.forEach(bar => {
        const width = bar.style.width || window.getComputedStyle(bar).width;
        bar.dataset.width = width;
        bar.style.width = "0";
    });

    setTimeout(() => {
        bars.forEach(bar => {
            if (bar.dataset.width) {
                bar.style.width = bar.dataset.width;
            }
        });
    }, 300);
};

const skillSection = document.getElementById("skills");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateBars();
            skillObserver.unobserve(skillSection);
        }
    });
}, {
    threshold: .3
});

if (skillSection) {
    skillObserver.observe(skillSection);
}

const navCollapse = document.querySelector(".navbar-collapse");
const navItems = document.querySelectorAll(".navbar-nav .nav-link");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
            bootstrap.Collapse.getInstance(navCollapse).hide();
        }
    });
});

document.querySelectorAll(".stat-box").forEach((box, index) => {
    box.style.animation = `floatBox 4s ease-in-out ${index * 0.3}s infinite`;
});

const profileImage = document.querySelector(".profile-img");

if (profileImage) {
    profileImage.style.opacity = "0";

    window.addEventListener("load", () => {
        profileImage.style.transition = "1.2s";
        profileImage.style.opacity = "1";
    });
}

console.log(
`%c👋 Welcome to Sai Dhanush's Portfolio

Designed with HTML, CSS & JavaScript

Have a great day! 🚀`,
"color:#FFD700;font-size:15px;font-weight:bold;"
);
document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("focus", () => {
        element.classList.add("focused");
    });

    element.addEventListener("blur", () => {
        element.classList.remove("focused");
    });
});

document.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
});

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

window.addEventListener(
    "scroll",
    () => {},
    { passive: true }
);

});
