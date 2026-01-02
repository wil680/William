export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Port 443",
      date: "January 2026 - Present",
      description: "Blah blah blahs",
    },
  ];

  return (
    <div id="experience">
      <div className="subsection">
        <h2 className="subsection-title">Experience</h2>
        {experiences.map((experience, index) => (
          <div>
            <p className="role" key={index}>
              {experience.role} @{" "}
              <a href="https://www.port443.io/" target="_blank">
                <span className="highlight">{experience.company}</span>
              </a>
            </p>
            <p className="date">{experience.date}</p>

            <ul>
              <li>wef</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
