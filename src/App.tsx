import { useState, useEffect } from 'react';
import logoTransparente from './assets/images/logo-transparente.png';

// Import images
import img1 from './assets/images/1.png';
import img2 from './assets/images/2.png';
import img3 from './assets/images/3.png';
import img4 from './assets/images/4.png';
import img5 from './assets/images/5.png';
import img6 from './assets/images/6.png';
import img7 from './assets/images/7.png';
import img8 from './assets/images/8.png';
import img9 from './assets/images/9.png';

interface Invitation {
  id: string;
  title: string;
  category: 'Boda' | 'XV Años' | 'Graduación';
  categoryKey: 'boda' | 'xv' | 'graduacion';
  originalPrice: number;
  price: number;
  url: string;
  image: string;
  code?: string;
  ticketSystemPrice: number;
}

const INVITATIONS: Invitation[] = [
  {
    id: 'xv-grethel',
    title: 'Grethel Stefania',
    category: 'XV Años',
    categoryKey: 'xv',
    originalPrice: 2000,
    price: 1500,
    url: 'https://my-dream-invitation-xv.netlify.app/',
    image: img9,
    ticketSystemPrice: 10
  },
  {
    id: 'xv-yellow',
    title: 'Yellow Inspiration',
    category: 'XV Años',
    categoryKey: 'xv',
    originalPrice: 2000,
    price: 1500,
    url: 'https://yellow-inspiration.netlify.app',
    image: img5,
    ticketSystemPrice: 10
  },
  {
    id: 'xv-pink',
    title: 'Pink Glow',
    category: 'XV Años',
    categoryKey: 'xv',
    originalPrice: 2000,
    price: 1500,
    url: 'https://pink-glow.netlify.app',
    image: img3,
    ticketSystemPrice: 10
  },
  {
    id: 'boda-poppy',
    title: 'Poppy',
    category: 'Boda',
    categoryKey: 'boda',
    originalPrice: 2000,
    price: 1500,
    url: 'https://poppy-boda.netlify.app/',
    image: img4,
    ticketSystemPrice: 10
  },
  {
    id: 'boda-cosmic',
    title: 'Cosmic Garden',
    category: 'Boda',
    categoryKey: 'boda',
    originalPrice: 2000,
    price: 1500,
    url: 'https://cosmic-garden-boda.netlify.app',
    image: img1,
    code: 'prueba123',
    ticketSystemPrice: 10
  },
  {
    id: 'grad-roots',
    title: 'Roots and Horizons',
    category: 'Graduación',
    categoryKey: 'graduacion',
    originalPrice: 2000,
    price: 1500,
    url: 'https://roots-and-horizonts-graduacion.netlify.app',
    image: img6,
    code: 'prueba123',
    ticketSystemPrice: 10
  },
  {
    id: 'grad-dark',
    title: 'Dark Soul',
    category: 'Graduación',
    categoryKey: 'graduacion',
    originalPrice: 2000,
    price: 1500,
    url: 'https://dark-soul-graduacion.netlify.app',
    image: img7,
    code: 'prueba123',
    ticketSystemPrice: 10
  },
  {
    id: 'grad-dancing',
    title: 'Dancing Vibes',
    category: 'Graduación',
    categoryKey: 'graduacion',
    originalPrice: 2000,
    price: 1500,
    url: 'https://dancing-vibes-graduacion.netlify.app',
    image: img8,
    code: 'prueba123',
    ticketSystemPrice: 10
  },
  {
    id: 'grad-sunset',
    title: 'Sunset',
    category: 'Graduación',
    categoryKey: 'graduacion',
    originalPrice: 2000,
    price: 1500,
    url: 'https://sunset-graduacion.netlify.app/',
    image: img2,
    code: 'prueba123',
    ticketSystemPrice: 10
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedInvitation, setSelectedInvitation] = useState<Invitation | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle keyboard accessibility for modal (ESC key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedInvitation(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter invitations based on category and search query
  const filteredInvitations = INVITATIONS.filter((inv) => {
    const matchesCategory = selectedCategory === 'Todas' || inv.category === selectedCategory;
    const matchesSearch = inv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Modal navigation helpers
  const handlePrevModal = (currentIndex: number) => {
    const prevIndex = (currentIndex - 1 + filteredInvitations.length) % filteredInvitations.length;
    setSelectedInvitation(filteredInvitations[prevIndex]);
  };

  const handleNextModal = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % filteredInvitations.length;
    setSelectedInvitation(filteredInvitations[nextIndex]);
  };

  const activeModalIndex = selectedInvitation
    ? filteredInvitations.findIndex((inv) => inv.id === selectedInvitation.id)
    : -1;

  return (
    <div id="root">
      {/* Premium Header */}
      <header className="app-header">
        <div className="container header-content">
          <div className="brand">
            <img src={logoTransparente} alt="Logo TuAmigoinvitaciones" className="brand-logo" />
            <span className="brand-name">TuAmigo<span>invitaciones</span></span>
          </div>
          <nav className="header-nav">
            <a href="#catalogo" className="nav-link">Catálogo</a>
            <a
              href="https://wa.me/?text=Hola!%20Me%20interesa%20adquirir%20una%20invitación%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: 'var(--wine-medium)', fontWeight: 'bold' }}
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <span className="hero-tag">Celebra con elegancia</span>
          <h1 className="hero-title">TuAmigoinvitaciones</h1>
          <p className="hero-description">
            Catálogo exclusivo de invitaciones digitales e interactivas. Diseños modernos optimizados para móviles, con confirmación directa, mapas, galerías y sistemas inteligentes.
          </p>



          {/* Search bar inside hero */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Buscar invitación... (ej. Poppy, Cosmic)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid var(--brown-light-border)',
                backgroundColor: 'var(--white)',
                fontFamily: 'var(--font-primary)',
                fontSize: '0.92rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--wine-medium)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--brown-light-border)'}
            />
          </div>
        </div>
      </section>

      {/* Filters & Catalog Grid */}
      <main id="catalogo" className="container" style={{ paddingBottom: '80px' }}>
        {/* Category filters (Todas is selected by default) */}
        <div className="filters-container">
          {['Todas', 'Boda', 'XV Años', 'Graduación'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'Todas' && '✨ '}
              {cat === 'Boda' && '💍 '}
              {cat === 'XV Años' && '👑 '}
              {cat === 'Graduación' && '🎓 '}
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog Grid: 2 columns mobile-first, 4 columns desktop */}
        {filteredInvitations.length > 0 ? (
          <>
            <div className="catalog-grid">
            {filteredInvitations.map((inv) => (
              <article key={inv.id} className="invitation-card">
                {/* Badge specifying the category */}
                <div className={`card-badge ${inv.categoryKey}`}>
                  {inv.category}
                </div>

                {/* Card Image Wrapper */}
                <div
                  className="card-image-wrapper"
                  onClick={() => setSelectedInvitation(inv)}
                  title="Haz clic para ampliar vista"
                >
                  <img
                    src={inv.image}
                    alt={`Mockup de ${inv.title}`}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="card-image-overlay">
                    <div className="zoom-hint">
                      Ampliar Diseño
                    </div>
                  </div>
                </div>

                {/* Card content info */}
                <div className="card-content">
                  <div className="card-header-info">
                    <h2 className="card-title">{inv.title}</h2>

                    {/* Price structure: stacked to avoid horizontal wrapping */}
                    <div className="price-container">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span className="price-current">${inv.price} MXN</span>
                        <span className="price-discount-tag">-25%</span>
                      </div>
                      <span className="price-original">Antes: ${inv.originalPrice}</span>
                    </div>
                  </div>

                  {/* Code demo credentials helper (if needed) */}
                  {inv.code && (
                    <div className="code-info-row">
                      <span>Ingresa: <strong>{inv.code}</strong></span>
                    </div>
                  )}

                  {/* Action redirect button */}
                  <a
                    href={inv.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    <span>Ver Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>

                  {/* Boleto electronic notice - moved to the very bottom */}
                  <p className="card-footer-note">
                    * Boletaje digital: +$10/persona
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Ticket Information Banner (Moved below the grid) */}
          <div className="info-banner" style={{ marginTop: '40px' }}>
            <div className="info-banner-text" style={{ textAlign: 'center', width: '100%' }}>
              <strong>¿Deseas agregar control de accesos?</strong> El sistema de boletaje electrónico (códigos QR únicos, control de entrada y pases digitales) está disponible por solo <strong>$10 MXN adicionales por persona/invitado</strong>.
            </div>
          </div>

          {/* How it is delivered & Plus benefits section (New) */}
          <section className="delivery-section">
            <h2 className="delivery-title">Cómo recibe la invitación tu invitado</h2>
            <div className="delivery-grid">
              {/* Left Side: WhatsApp Mockup */}
              <div className="whatsapp-mockup">
                <div className="whatsapp-bubble">
                  {/* Link preview card */}
                  <div className="whatsapp-link-preview">
                    <img 
                      src={img6} 
                      alt="Vista previa de portada" 
                      className="whatsapp-preview-img" 
                    />
                    <div className="whatsapp-preview-info">
                      <div className="whatsapp-preview-title">Cecati #173 - Enfermería</div>
                      <div className="whatsapp-preview-domain">cecati173-enfermeria-graduacion.netlify.app</div>
                    </div>
                  </div>
                  
                  {/* WhatsApp text content */}
                  <div className="whatsapp-text">
                    Hola Ana Patricia Barcenas Castillo.{"\n"}
                    El equipo de EventCreations te saluda cordialmente. Queremos mandarte tu invitación web para tu próximo evento el 2026-07-10. Compártela únicamente con tus invitados y reserva tu esperada fecha.{"\n\n"}
                    Invitación web:{"\n"}
                    <a href="https://cecati173-enfermeria-graduacion.netlify.app/?v=3" target="_blank" rel="noopener noreferrer">
                      https://cecati173-enfermeria-graduacion.netlify.app/?v=3
                    </a>{"\n"}
                    Clave de acceso: <strong>26TgX</strong>{"\n\n"}
                    Nota: No compartas esta clave con nadie más pues tus boletos electrónicos pueden ser clonados. Presenta tus boletos el día de tu evento y listo.
                  </div>
                  <div className="whatsapp-time">
                    9:38 p.m. ✓✓
                  </div>
                </div>
              </div>

              {/* Right Side: Benefits / Plus list */}
              <div className="benefits-list">
                <div className="benefit-card">
                  <div className="benefit-icon-box" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>01</div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Enlace Web Personalizado</h3>
                    <p className="benefit-desc">
                      Tus invitados reciben un link único que abre directamente su invitación digital interactiva sin necesidad de instalar ninguna aplicación.
                    </p>
                  </div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon-box" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>02</div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Previsualización de Portada</h3>
                    <p className="benefit-desc">
                      Al compartir el enlace por WhatsApp, se genera automáticamente una tarjeta de previsualización con la imagen de portada y el título personalizado de tu evento.
                    </p>
                  </div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon-box" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>03</div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Actualizaciones en Tiempo Real</h3>
                    <p className="benefit-desc">
                      ¿Cambió el horario o la mesa de regalos? Corrige cualquier detalle al instante y sin costo. El enlace siempre mostrará la información más reciente.
                    </p>
                  </div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon-box" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>04</div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">Confirmación de Asistencia Eficiente</h3>
                    <p className="benefit-desc">
                      Los invitados confirman directamente en la web y los datos se envían de inmediato a tu WhatsApp, permitiéndote llevar el control de tu lista sin esfuerzo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--brown-medium)' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>No se encontraron invitaciones que coincidan con tu búsqueda.</p>
            <button
              className="demo-btn"
              style={{ margin: '20px auto 0', display: 'block' }}
              onClick={() => { setSelectedCategory('Todas'); setSearchQuery(''); }}
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </main>

      {/* Interactive Zoom Modal */}
      {selectedInvitation && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedInvitation(null)}
        >
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="modal-close-btn"
              onClick={() => setSelectedInvitation(null)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Carousel Navigation in Modal */}
            {filteredInvitations.length > 1 && (
              <>
                <button
                  onClick={() => handlePrevModal(activeModalIndex)}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--brown-light-border)',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'var(--wine-dark)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  title="Anterior"
                >
                  ‹
                </button>
                <button
                  onClick={() => handleNextModal(activeModalIndex)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--brown-light-border)',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'var(--wine-dark)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  title="Siguiente"
                >
                  ›
                </button>
              </>
            )}

            {/* Modal Scrollable Image wrapper */}
            <div className="modal-image-wrapper">
              <img
                src={selectedInvitation.image}
                alt={`Previsualización completa de ${selectedInvitation.title}`}
                className="modal-image"
              />
            </div>

            {/* Modal Detail Row */}
            <div className="modal-details">
              <div className="modal-title-row">
                <h3 className="modal-title">{selectedInvitation.title}</h3>
                <span className={`modal-badge ${selectedInvitation.categoryKey}`}>
                  {selectedInvitation.category}
                </span>
              </div>

              <div className="modal-prices">
                <span className="modal-price-original">${selectedInvitation.originalPrice}</span>
                <span className="modal-price-current">${selectedInvitation.price} MXN</span>
              </div>

              <p className="modal-info-text">
                Esta plantilla incluye secciones interactivas como cuenta regresiva, mapas Waze/Maps, confirmación directa por WhatsApp/Correo, sugerencia de hospedaje y mesa de regalos.
              </p>

              {/* Password credentials helper if applicable */}
              {selectedInvitation.code && (
                <div className="code-info" style={{ margin: '4px 0' }}>
                  <span>Este demo requiere contraseña para ingresar: <strong>{selectedInvitation.code}</strong></span>
                </div>
              )}

              {/* Ticket system notification */}
              <div className="ticket-feature">
                <span>Sistema de boletaje digital opcional por solo <strong>$10 MXN</strong> por invitado.</span>
              </div>

              <a
                href={selectedInvitation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
                style={{ marginTop: '5px' }}
              >
                <span>Abrir Ejemplo Completo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Brand Footer */}
      <footer className="app-footer">
        <div className="container">
          <img src={logoTransparente} alt="Logo" className="footer-logo" />
          <h2 className="footer-brand" style={{ color: 'var(--white)' }}>TuAmigoinvitaciones</h2>
          <p className="footer-tagline">Invitaciones que trascienden</p>
          <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.5 }}>
            Diseños digitales interactivos y elegantes creados a la medida para bodas, XV años, graduaciones y eventos especiales.
          </p>
          <div className="footer-separator"></div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} TuAmigoinvitaciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
