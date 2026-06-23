const skills = [
  { name: "HTML",       img: "/src/assets/img/html.png" },
  { name: "CSS",        img: "/src/assets/img/css.png" },
  { name: "JavaScript", img: "/src/assets/img/js.png" },
  { name: "Bootstrap",  img: "/src/assets/img/Bootstrap.png" },
  { name: "React.js",   img: "/src/assets/img/react.png" },
  { name: "Python",     img: "/src/assets/img/python.png" },
  { name: "Django",     img: "/src/assets/img/Django.png" },
  { name: "REST Api",   img: "/src/assets/img/restapi.png" },
  { name: "MySQL",      img: "/src/assets/img/sql.png" },
  { name: "AWS",        img: "/src/assets/img/aws.png" },
  { name: "Git",        img: "/src/assets/img/git.png" },
  { name: "GitHub",     img: "/src/assets/img/github.png" },

  
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-title">
        <span className="section-label">What I Know</span>
        <h2>My Skills</h2>
      </div>
      <div className="skills__grid">
        {skills.map(({ name, img }) => (
          <div key={name} className="skills__card">
            <img src={img} alt={`${name} logo`} className="skills__img" />
            <p className="skills__name">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
