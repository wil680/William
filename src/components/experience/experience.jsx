import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Port 443",
      link: "https://www.port443.io/",
      date: "January 2026 - Present",
      description: [
        "Contributed to software development projects, including implementing new features and resolving bugs to ensure high-quality deliverables.",
        "Developed and executed unit tests to improve code reliability and maintainability.",
        "Actively participated in Agile development teams, collaborating on sprint planning, code reviews, and continuous integration efforts",
      ],
    },
    {
      role: "Carvery Clerk",
      company: "Fortinos",
      link: "https://www.fortinos.ca",
      date: "June 2023 - November 2023",
      description: [
        "Prepared and served food items while maintaining cleanliness and food safety standards",
        "Provided friendly and efficient customer service",
        "Trained and supported new team members",
        "Communicated with customers to take orders, answer questions, and ensure satisfaction",
      ],
    },
  ];

  return (
    <div id="experience">
      <div className="subsection">
        <h2 className="subsection-title">Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            {experiences.map((experience, index) => (
              <div className="subsection-body" key={index}>
                <div className="experience-row">
                  <div className="bar"></div>
                  <div className="experience-content">
                    <h3 className="role">
                      {experience.role} @{" "}
                      <a href={experience.link} target="_blank">
                        <span className="highlight">{experience.company}</span>
                      </a>
                    </h3>
                    <p className="date">{experience.date}</p>

                    <ul>
                      {experience.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
