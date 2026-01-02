export default function About() {
  return (
    <div id="about">
      <div className="subsection">
        <h2 className="subsection-title">About me</h2>
        <div className="subsection-body">
          <p>
            Currently I am in my 1A term of Computer Engineering at Waterloo.
            This winter I am interning at{" "}
            <a href="https://www.port443.io/" target="_blank">
              <span className="highlight">Port 443</span>
            </a>
            .
          </p>

          <p>Technology I'm familiar with:</p>
          <ul className="tech-list">
            <li>C++</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>Typescript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
