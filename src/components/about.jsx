import Toronto from "../../toronto.png";

export default function About() {
  return (
    <div id="about">
      <div className="subsection">
        <h2 className="subsection-title">About me</h2>
        <div className="body-and-picture">
          <div className="subsection-body" id="about-body">
            <p>
              I’m a 1A Computer Engineering student at the{" "}
              <a href="https://uwaterloo.ca/" target="_blank">
                <span className="highlight">University of Waterloo</span>
              </a>{" "}
              with a growing interest in software engineering. This winter, I’m
              interning at{" "}
              <a href="https://www.port443.io/" target="_blank">
                <span className="highlight">Port 443</span>
              </a>
              , where I’m learning by building and working on real-world
              projects.
            </p>
            <p>Technology I'm familiar with:</p>
            <ul className="tech-list">
              <li>C++</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>Typescript</li>
              <li>React</li>
            </ul>
            <p>
              I’m currently exploring full-stack development and interested in
              machine learning. Outside of tech, I enjoy playing the piano,
              playing poker, and binge watching Netflix.
            </p>
          </div>
          <img src={Toronto} className="image" />
        </div>
      </div>
    </div>
  );
}
