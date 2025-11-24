class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .navbar {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #F59E0B;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
          color: #10B981;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #F59E0B;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #F59E0B;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            gap: 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }
          .nav-links.active {
            transform: translateY(0);
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav class="navbar">
        <div class="navbar-container">
          <a href="/" class="logo">
            <i data-feather="droplet" class="logo-icon"></i>
            Es Buah Viral Dua Putri
          </a>
<button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
          <div class="nav-links">
            <a href="#home" class="nav-link">Beranda</a>
            <a href="#story" class="nav-link">Cerita Kami</a>
            <a href="#products" class="nav-link">Menu</a>
            <a href="#contact" class="nav-link">Kontak</a>
</div>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        feather.replace(icon, 'x');
      } else {
        feather.replace(icon, 'menu');
      }
    });

    // Close mobile menu when clicking a link
    this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          feather.replace(mobileMenuBtn.querySelector('i'), 'menu');
        }
      });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.shadowRoot.querySelector('.navbar').style.padding = '0.5rem 2rem';
      } else {
        this.shadowRoot.querySelector('.navbar').style.padding = '1rem 2rem';
      }
    });

    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);