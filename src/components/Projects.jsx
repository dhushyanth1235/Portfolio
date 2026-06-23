const projects = [

  {
    id: 1,
    title: "E-voting Management System",
    image: "src/assets/img/evotingimg.jpg",
    languages: "Python",
    files: "JSON, TXT",
    description: "An e-voting system is a digital platform that allows voters to securely cast and count votes electronically over the internet or electronic machines.",
    tags: ["Python", "Django", "React.js", "MySQL"],
  },

  {
    id: 2,
    title: "Online Book Review Platform ",
    image: "src/assets/img/book.webp",
    languages: "React",
    files: "TXT",
    description: "Online Book Review Platform lets users browse books, read reviews, and give ratings. It helps discover books through user feedback and recommendations.",
    tags: ["HTML", "CSS", "Javascript", "React.js"],
  },

  {
    id: 3,
    title: "Identifying Smart Charging Station ",
    image: "src/assets/img/ev.jpg",
    languages: "Java",
    files: "Android Studio 2.2",
    description: "An EV smart charging station identification system locates and manages optimal charging points for electric vehicles efficiently.",
    tags: ["Java", "XML", "Android"],
  },

  {
    id: 4,
    title: "Banking Management System",
    image: "src/assets/img/bank.avif",
    languages: "Python",
    files: "JSON, TXT",
    description: "A Banking Management System is a software application that manages customer accounts, transactions, and financial operations securely and efficiently.",
    tags: ["Python", "Django", "React.js", "MySQL"],
  },

  {
    id: 5,
    title: "Spotify Player",
    image: "src/assets/img/spotify.jpg",
    languages: "React",
    files: "TXT File",
    description: "A Spotify player project is a web or app-based music player that streams songs, manages playlists, and provides playback controls using the Spotify API.",
    tags: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    id: 6,
    title: "Car Sales Site ",
    image: "src/assets/img/carsale.jpg",
    languages: "React",
    files: "TXT File",
    description: "A car sale website is an online platform where users can browse, compare, and buy or sell new and used cars.",
    tags: ["HTML", "CSS", "Javascript"],
  },

];


export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-title">
        <span className="section-label">My Work</span>
        <h2>Projects</h2>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__img-wrap">
              <img src={project.image} alt={project.title} className="projects__img" />
            </div>
            <div className="projects__info">
              <h3 className="projects__title">{project.title}</h3>
              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>
              <p className="projects__desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
