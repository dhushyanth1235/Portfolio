export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} <strong>Dhushyanth Portfolio</strong> — All Rights Reserved
        </p>
        <p className="footer__credit">
          Designed & Developed by <a href="#">Dhushyanth S</a>
        </p>
      </div>
    </footer>
  );
}
