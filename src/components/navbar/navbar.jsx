import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Menu />
    </nav>
  );
}

function Logo() {
  return (
    <a href="https://williampang.com">
      <h1 id="logo"> William Pang</h1>
    </a>
  );
}

function Menu() {
  return (
    <ul className="navbar-ul">
      <li>
        <a className="navbar-a" href="#page">
          Home
        </a>
      </li>
      <li>
        <a className="navbar-a" href="#about">
          About me
        </a>
      </li>
      <li>
        <a className="navbar-a" href="#experience">
          Experience
        </a>
      </li>
      <li>
        <a className="navbar-a" href="#projects">
          {" "}
          Projects
        </a>
      </li>
    </ul>
  );
}
