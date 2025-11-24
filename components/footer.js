class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1F2937;
          color: #F3F4F6;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #F59E0B;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
          color: #10B981;
        }
        .footer-about {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #D1D5DB;
        }
        .footer-heading {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #F59E0B;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-link {
          margin-bottom: 0.75rem;
        }
        .footer-link a {
          color: #D1D5DB;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link a:hover {
          color: #F59E0B;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #374151;
          color: white;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background-color: #F59E0B;
          transform: translateY(-3px);
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding: 1.5rem 2rem;
          text-align: center;
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <div class="footer-logo">
              <i data-feather="droplet" class="footer-logo-icon"></i>
              Es Buah Viral Dua Putri
</div>
            <p class="footer-about">
              Menyajikan es buah viral segar dengan racikan spesial sejak 2023. Segarnya bikin nagih!
</p>
</div>
          <div>
            <h3 class="footer-heading">Tautan Cepat</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#home">Beranda</a></li>
              <li class="footer-link"><a href="#story">Tentang Kami</a></li>
              <li class="footer-link"><a href="#products">Menu</a></li>
              <li class="footer-link"><a href="#contact">Kontak</a></li>
</ul>
          </div>
          <div>
            <h3 class="footer-heading">Produk</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#products">Es Buah</a></li>
              <li class="footer-link"><a href="#products">Es Alpukat</a></li>
              <li class="footer-link"><a href="#products">Es Cappuccino Cincau</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Kontak</h3>
            <ul class="footer-links">
              <li class="footer-link">
                <i data-feather="map-pin" class="mr-2"></i>
                Jl. Remujung No. 4, Kota Malang
</li>
              <li class="footer-link">
                <i data-feather="phone" class="mr-2"></i>
                +62 812 3456 7890
              </li>
              <li class="footer-link">
                <i data-feather="mail" class="mr-2"></i>
                esbuahviralduaputri@gmail.com
</li>
              <li class="footer-link">
                <i data-feather="clock" class="mr-2"></i>
                Setiap Hari 09:00 - 18:00 WIB
</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2023 Es Buah Viral Dua Putri. All Rights Reserved.
</div>
      </footer>
    `;

    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);