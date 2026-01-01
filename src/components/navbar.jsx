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
  return <h1 id="logo"> William Pang</h1>;
}

function Menu() {
  return (
    <ul className="navbar-ul">
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About me</a>
      </li>
      <li>
        <a>Experience</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
    </ul>
  );
}

