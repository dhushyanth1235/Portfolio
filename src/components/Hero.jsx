import { useEffect, useState } from "react";

const roles = ["FullStack Developer", "Software Developer", "Python Developer", ];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="hero section">
      <img src="/img/bg.png" alt="Background" className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__title">Dhushyanth S</h1>
        <p className="hero__subtitle">
          I'm a <span className="hero__typed">{displayText}</span>
          <span className="hero__cursor">|</span>
        </p>
        <div className="hero__actions">
          <a
            href="/img/DHUSHYANTH S-RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero__btn hero__btn--primary"
          >
            View CV
          </a>
          <a href="#contact" className="hero__btn hero__btn--outline">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
