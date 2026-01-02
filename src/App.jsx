import "./App.css";
import Title from "./components/header/header";
import Footer from "./components/footer";
import Button from "./components/common/button";
import Navbar from "./components/navbar/navbar";
import Icons from "./components/icons/icons";
import Description from "./components/header/description";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";

export default function App() {
  function handleClick() {
    window.location.href = "mailto:wy4pang@uwaterloo.ca?subject=Hi";
  }

  return (
    <div className="page">
      <Navbar />
      <div className="intro-page">
        <Title />
        <Description />
        <div className="email-container">
          <Button onClick={handleClick}>Email me</Button>
        </div>
        <Icons />
      </div>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
