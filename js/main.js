// Three.js Scene Setup
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;

// Initialize Three.js
function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('three-canvas'),
        alpha: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create particle system
    createParticles();
    
    // Position camera
    camera.position.z = 5;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Start animation loop
    animate();
}

// Create particle system
function createParticles() {
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;
        
        const color = new THREE.Color();
        color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles
    if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        
        // Mouse interaction
        particles.rotation.x += (mouseY * 0.0001);
        particles.rotation.y += (mouseX * 0.0001);
    }
    
    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Mouse tracking
function onMouseMove(event) {
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
}

// GSAP Animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animation - Initial load
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out'
    });
    
    // Hero section re-animation when scrolling back up
    gsap.fromTo('.hero-content', 
        {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#home',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
                onEnter: () => {
                    gsap.to('.hero-content h1', {
                        backgroundPosition: '200% center',
                        duration: 2,
                        ease: 'power2.inOut'
                    });
                },
                onEnterBack: () => {
                    // Re-animate hero elements when scrolling back up
                    gsap.fromTo('.profile-container', 
                        { scale: 0.8, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
                    );
                    gsap.fromTo('.hero-content h1', 
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
                    );
                    gsap.fromTo('.hero-content p', 
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: 'power2.out' }
                    );
                    gsap.fromTo('.hero-content .btn-primary, .hero-content .btn-secondary', 
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, delay: 0.6, stagger: 0.1, ease: 'power2.out' }
                    );
                }
            }
        }
    );
    
    // Profile image floating animation
    gsap.to('.profile-container', {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
    
    // Animate chevron down arrow
    gsap.to('.fa-chevron-down', {
        y: 10,
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
    
    // Section animations
    gsap.utils.toArray('section').forEach((section, i) => {
        if (i === 0) return; // Skip hero section
        
        gsap.from(section.children, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Skill bars animation
    gsap.utils.toArray('.progress-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        gsap.to(bar, {
            width: width,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%'
            }
        });
    });
    
    // Project cards hover effects
    gsap.utils.toArray('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Coding profile cards animation
    gsap.utils.toArray('.coding-profile-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            }
        });
    });
}

// Smooth scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-menu-open');
        });
    }
}

// Typing effect for hero text
function initTypingEffect() {
    const text = "Full Stack Developer | Defense Forces Veteran | Competitive Programmer";
    const element = document.querySelector('.hero-content p');
    
    if (element) {
        element.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Particle cursor effect
function initCursorEffect() {
    let particles = [];
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = `hsl(${200 + Math.random() * 60}, 70%, 50%)`;
        particle.style.pointerEvents = 'none';
        particle.style.position = 'fixed';
        document.body.appendChild(particle);
        
        particles.push({
            element: particle,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 30
        });
    }
    
    function updateParticles() {
        particles = particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            particle.element.style.opacity = particle.life / 30;
            
            if (particle.life <= 0) {
                document.body.removeChild(particle.element);
                return false;
            }
            return true;
        });
        
        requestAnimationFrame(updateParticles);
    }
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) {
            createParticle(e.clientX, e.clientY);
        }
    });
    
    updateParticles();
}

// Add enhanced scroll animations
function initEnhancedScrollAnimations() {
    // Hero section visibility tracking
    ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
            const progress = self.progress;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent) {
                // Fade out as scrolling down, fade in when scrolling back up
                gsap.to(heroContent, {
                    opacity: self.direction === 1 ? 1 - progress : 1,
                    y: self.direction === 1 ? progress * -30 : 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        }
    });
    
    // Navigation background opacity based on scroll
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            const nav = document.querySelector('nav');
            const scrollY = window.scrollY;
            
            if (nav) {
                if (scrollY > 100) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
            }
        }
    });
    
    // Parallax effect for hero background
    ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
            const canvas = document.getElementById('three-canvas');
            if (canvas && particles) {
                particles.rotation.y += self.progress * 0.1;
            }
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initAnimations();
    initEnhancedScrollAnimations();
    initSmoothScroll();
    initMobileMenu();
    initTypingEffect();
    initCursorEffect();
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add glowing effect to buttons on hover
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('glow');
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('glow');
        });
    });
    
    // Add parallax effect to sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});