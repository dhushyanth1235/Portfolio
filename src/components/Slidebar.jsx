import { useState } from "react";

const navItems = [
  { href: "#home",     icon: "⌂",  label: "Home" },
  { href: "#about",    icon: "◉",  label: "About" },
  { href: "#skills",   icon: "⚡", label: "Skills" },
  { href: "#projects", icon: "⊞",  label: "Projects" },
  { href: "#contact",  icon: "✉",  label: "Contact" },
  { href: "/src/assets/img/DHUSHYANTH S-RESUME.pdf", icon: "📄", label: "Resume", external: true },
];

export default function Sidebar({ activeSection, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
        {/* Profile */}
        <div className="sidebar__profile">
          <div className="sidebar__avatar">
            <img src="/src/assets/img/dhus.png" alt="Dhushyanth S" />
          </div>
          <h2 className="sidebar__name">Dhushyanth S</h2>
          <div className="sidebar__socials">
            {/* <a href="#" aria-label="Twitter" title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.634 5.903-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a> */}
            
            <a href="https://www.linkedin.com/in/dhushyanth-s-dhushyanth" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/dhushyanth1235" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.863 10.916c.575.106.787-.25.787-.556 0-.275-.01-1.004-.016-1.97-3.2.696-3.877-1.543-3.877-1.543-.524-1.333-1.28-1.688-1.28-1.688-1.046-.715.08-.7.08-.7 1.156.081 1.764 1.188 1.764 1.188 1.028 1.762 2.697 1.253 3.354.958.104-.744.402-1.253.73-1.541-2.554-.29-5.238-1.277-5.238-5.684 0-1.255.448-2.282 1.183-3.087-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.162 1.18a10.98 10.98 0 0 1 5.756 0c2.195-1.489 3.159-1.18 3.159-1.18.627 1.582.233 2.75.115 3.04.737.805 1.181 1.832 1.181 3.087 0 4.418-2.688 5.39-5.25 5.675.414.356.783 1.058.783 2.133 0 1.54-.014 2.781-.014 3.16 0 .309.208.667.793.554A11.503 11.503 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5z"/></svg>
            </a>
              <a href="https://www.instagram.com/_mr_unique_boiii_?igsh=MXM2aDY0enIyY3M0Zg==" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/916369352572" aria-label="WhatsApp" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.32-1.66a11.88 11.88 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.42zM12.07 21.8a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.75.98 1-3.66-.23-.38a9.86 9.86 0 1 1 8.37 4.64zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
            </a>
            <a href="mailto:dhushyanthselvan@gmail.com" aria-label="Email" title="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M24 4.5v15A1.5 1.5 0 0 1 22.5 21h-21A1.5 1.5 0 0 1 0 19.5v-15A1.5 1.5 0 0 1 1.5 3h21A1.5 1.5 0 0 1 24 4.5zm-1.5.318-9.93 8.1a.75.75 0 0 1-.95 0l-9.12-7.44V19.5h20V4.818zm-20-.318 9.595 7.83L21.5 4.5h-19z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          {navItems.map(({ href, icon, label, external }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className={`sidebar__nav-link ${activeSection === href.slice(1) ? "sidebar__nav-link--active" : ""}`}
            >
              <span className="sidebar__nav-icon">{icon}</span>
              <span>{label}</span>
              {external && <span className="sidebar__nav-badge">↗</span>}
            </a>
          ))}
        </nav>

        {/* Theme Toggle at Bottom */}
        <div className="sidebar__theme">
          <button
            className="sidebar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="sidebar__theme-icon">
              {theme === "dark" ? "☀" : "☽"}
            </span>
            <span className="sidebar__theme-label">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </aside>

      {menuOpen && (
        <div className="sidebar__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
