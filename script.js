  // Hamburger menu functionality
        document.getElementById('hamburger').addEventListener('click', function() {
            document.getElementById('navLinks').classList.toggle('active');
        });

        // Smooth scrolling untuk navigasi
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                document.getElementById('navLinks').classList.remove('active');
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Terapkan animasi pada elemen yang memiliki kelas animate-fadeIn
            document.querySelectorAll('.animate-fadeIn, .animate-slideLeft, .animate-slideRight').forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });