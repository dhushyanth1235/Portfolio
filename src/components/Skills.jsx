const skills = [
  
  { name: "HTML",       img: "/img/html.png" },
  { name: "CSS",        img: "/img/css.png" },
  { name: "JavaScript", img: "/img/js.png" },
  { name: "Bootstrap",  img: "/img/Bootstrap.png" },
  { name: "React.js",   img: "/img/react.png" },
  { name: "Python",     img: "/img/python.png" },
  { name: "Django",     img: "/img/Django.png" },
  { name: "REST Api",   img: "/img/restapi.png" },
  { name: "MySQL",      img: "/img/sql.png" },
  { name: "AWS",        img: "/img/aws.png" },
  { name: "Git",        img: "/img/git.png" },
  { name: "GitHub",     img: "/img/github.png" },
  
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
