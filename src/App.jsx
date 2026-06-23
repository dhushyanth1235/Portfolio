// import { useEffect, useState } from "react";
// import Sidebar from "./components/Slidebar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import "./Styles/Portfolio.css";

// export default function App() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("portfolio-theme") || "dark";
//   });

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("portfolio-theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     const sections = ["home", "about", "skills", "projects", "contact"];

//     const handleScroll = () => {
//       const scrollY = window.scrollY + 200;
//       setShowScrollTop(window.scrollY > 100);

//       for (const id of sections) {
//         const el = document.getElementById(id);
//         if (el && scrollY >= el.offsetTop && scrollY <= el.offsetTop + el.offsetHeight) {
//           setActiveSection(id);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//   const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

//   return (
//     <div className="layout">
//       <Sidebar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
//       <main className="main-content">
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//         <Footer />
//       </main>
//       <button
//         className={`scroll-top ${showScrollTop ? "scroll-top--visible" : ""}`}
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//       >
//         ↑
//       </button>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import Sidebar from "./components/Slidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./Styles/Portfolio.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  // 🌙 theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // 📍 active section detect
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      setShowScrollTop(window.scrollY > 100);

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop && scrollY <= el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 👉 NEW: scroll animation (இங்க தான் add பண்ணினேன்)
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="layout">
      <Sidebar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <button
        className={`scroll-top ${showScrollTop ? "scroll-top--visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
