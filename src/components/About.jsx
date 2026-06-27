export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-title">
        <span className="section-label">Get To Know</span>
        <h2>About Me</h2>
      </div>
      <div className="about__container">
        <p className="about__bio">
          I am a dedicated Full-Stack Developer with a strong passion for technology and problem-solving. I specialize
          in building responsive, user-friendly, and scalable web applications by working across both frontend and
          backend technologies. On the frontend, I create clean and engaging interfaces using HTML, CSS, JavaScript, and
          modern frameworks, while on the backend I develop robust systems with Python, Node.js, and databases. I focus
          on writing clean, efficient, and maintainable code that ensures long-term reliability. Collaboration and
          teamwork are at the core of my work style, as I enjoy turning ideas into real-world digital solutions. I
          continuously learn new tools and technologies to stay updated with industry trends and best practices. My aim
          is to deliver high-quality applications that provide real value to users and businesses.
        </p>

        <h3 className="about__role">FullStack Developer</h3>
        <p className="about__role-desc">
          Entry-level Full-Stack Developer with foundational knowledge of frontend and backend technologies. Skilled
          in HTML, CSS, JavaScript, and React.js frameworks for building responsive interfaces, with growing experience in
          backend development using Python, Django, and databases. Familiar with version control, API integration,
          and debugging, with an eagerness to learn modern tools and frameworks. Enthusiastic about problem-solving,
          collaboration, and creating user-friendly, scalable web applications that deliver real value.
        </p>

        <div className="about__info">
          <div className="about__info-col">
            <div className="about__info-item">
              <span className="about__info-icon">›</span>
              <strong>Phone:</strong>
              <span>+91 6369352572</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">›</span>
              <strong>City:</strong>
              <span>Coimbatore, Tamilnadu</span>
            </div>
          </div>
          <div className="about__info-col">
            <div className="about__info-item">
              <span className="about__info-icon">›</span>
              <strong>Degree:</strong>
              <span>B Sc Information Technology</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">›</span>
              <strong>Email:</strong>
              <span>dhushyanthselvan@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
