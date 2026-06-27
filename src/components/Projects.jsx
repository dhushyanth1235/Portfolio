import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-voting Management System",
    image: "src/assets/img/evotingimg.jpg",
    tags: ["Python", "Django", "REST APIs", "React.js", "MySQL", "Git & GitHub"],
    description:
      "An E-voting system is a digital platform that allows voters to securely cast and count votes electronically over the internet or electronic machines.",
    features: [
      "Voter Registration with Email OTP verification",
      "OTP-based Login & Vote Authorization (3-layer security)",
      "Candidate listing by ward & election",
      "Secure vote casting with tamper-proof records",
      "Election Committee dashboard with live results",
      "Admin panel — voter CSV import, candidate CRUD, election management",
    ],
    tech: ["Python", "Django", "Django REST Framework", "React.js", "Vite", "MySQL", "Git & GitHub"],
    github: "https://github.com/dhushyanth1235",
    demo: null,
  },
  {
    id: 2,
    title: "Online Book Review Platform",
    image: "src/assets/img/book.webp",
    tags: ["HTML", "CSS", "Javascript", "React.js", "Local Storage", "Git & GitHub"],
    description:
      "Online Book Review Platform lets users browse books, read reviews, and give ratings. It helps discover books through user feedback and recommendations.",
    features: [
      "Browse and search books by title or author",
      "Read and write detailed book reviews",
      "Star rating system for each book",
      "Book recommendations based on user feedback",
      "Local Storage for saving user preferences",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Local Storage", "Git & GitHub"],
    github: "https://github.com/dhushyanth1235",
    demo: null,
  },
  {
    id: 3,
    title: "Identifying Smart Charging Station",
    image: "src/assets/img/ev.jpg",
    tags: ["Java", "XML", "Android"],
    description:
      "An EV smart charging station identification system locates and manages optimal charging points for electric vehicles efficiently.",
    features: [
      "EV charging station locator on map",
      "Real-time slot availability checking",
      "Booking & reservation management",
      "Java-powered business logic",
      "XML-based responsive UI layouts",
    ],
    tech: ["Java", "XML", "Android Studio"],
    github: "https://github.com/dhushyanth1235",
    demo: null,
  },
  {
    id: 4,
    title: "Banking Management System",
    image: "src/assets/img/bank.avif",
    tags: ["Python", "Django", "React.js", "MySQL"],
    description:
      "A Banking Management System is a software application that manages customer accounts, transactions, and financial operations securely and efficiently.",
    features: [
      "Customer account creation & management",
      "Deposit, withdrawal & fund transfer",
      "Transaction history & statements",
      "Django REST API backend",
      "React.js frontend with MySQL database",
    ],
    tech: ["Python", "Django", "React.js", "MySQL", "Git & GitHub"],
    github: "https://github.com/dhushyanth1235",
    demo: null,
  },
  {
    id: 5,
    title: "Spotify Player",
    image: "src/assets/img/spotify.jpg",
    tags: ["HTML", "CSS", "Javascript", "React.js"],
    description:
      "A Spotify player project is a web or app-based music player that streams songs, manages playlists, and provides playback controls using the Spotify API.",
    features: [
      "Browse and search songs & albums",
      "Playback controls — play, pause, skip, volume",
      "Playlist creation & management",
      "Spotify API integration",
      "Responsive UI with React.js",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Spotify API"],
    github: "https://github.com/dhushyanth1235",
    demo: null,
  },
  {
    id: 6,
    title: "Car Sales Site",
    image: "src/assets/img/carsale.jpg",
    tags: ["HTML", "CSS", "Javascript"],
    description:
      "A car sale website is an online platform where users can browse, compare, and buy or sell new and used cars.",
    features: [
      "Browse new & used car listings",
      "Filter by brand, price & model",
      "Detailed car specification pages",
      "Contact seller / enquiry form",
      "Fully responsive design",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dhushyanth1235",
    demo: null,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) setSelected(null);
  };

  return (
    <section id="projects" className="projects section">
      <div className="section-title">
        <span className="section-label">My Work</span>
        <h2>Projects</h2>
      </div>

      {/* ── Cards Grid ── */}
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="projects__img"
              />
            </div>
            <div className="projects__info">
              <h3 className="projects__title">{project.title}</h3>
              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>
              <p className="projects__desc">{project.description}</p>
              <div className="projects__actions">
                <button
                  className="proj-btn proj-btn--primary"
                  onClick={() => setSelected(project)}
                >
                  View Details
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn--outline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div className="pmodal__overlay" onClick={closeModal}>
          <div className="pmodal__box">
            <button
              className="pmodal__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="pmodal__img-wrap">
              <img
                src={selected.image}
                alt={selected.title}
                className="pmodal__img"
              />
            </div>

            <div className="pmodal__body">
              <div className="projects__tags" style={{ marginBottom: "10px" }}>
                {selected.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>

              <h2 className="pmodal__title">{selected.title}</h2>
              <p className="pmodal__desc">{selected.description}</p>

              <div className="pmodal__section">
                <h4 className="pmodal__subheading">✨ Features</h4>
                <ul className="pmodal__list">
                  {selected.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="pmodal__section">
                <h4 className="pmodal__subheading">🛠 Tech Stack</h4>
                <div className="pmodal__tech">
                  {selected.tech.map((t) => (
                    <span key={t} className="pmodal__tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pmodal__footer">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn--primary"
                >
                  GitHub ↗
                </a>
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn--outline"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
