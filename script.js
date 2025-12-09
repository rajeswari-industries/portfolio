document.addEventListener('DOMContentLoaded', () => {

    // --- Cursor Logic (Needed for the HTML structure) ---
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const interactiveElements = 'a, button, .project-card, .skill-badge, .nav-link, .navbar-brand';

    if (cursor && cursorFollower) {
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        function animateCursor() {
            // Smoothly move the follower (0.15 is the lag speed)
            posX += (mouseX - posX) * 0.15;
            posY += (mouseY - posY) * 0.15;

            cursorFollower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            requestAnimationFrame(animateCursor);
        }

        document.addEventListener('mousemove', (e) => {
            // Main cursor (immediate position)
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // Follower cursor (target position)
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        animateCursor();

        // Hover Effect
        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
                cursorFollower.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
                cursorFollower.classList.remove('hovered');
            });
        });
    }

    // --- Smooth Scrolling and Active Link Logic (from your previous structure) ---

    // Smooth Scrolling with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.getBoundingClientRect().top + window.pageYOffset - 70;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Link Highlighting (Simplified ScrollSpy)
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = 70;

    const updateActiveLink = () => {
        let current = '';

        sections.forEach(section => {
            // Check if current scroll position is past the section start point (with offset)
            if (scrollY >= section.offsetTop - navbarHeight - 10) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    // Initial call to set the active link on page load
    updateActiveLink();

    // Close Mobile Navbar on Link Click (Bootstrap specific)
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (window.bootstrap && navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});
