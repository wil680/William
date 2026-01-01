import "./App.css";
import Title from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Icons from "./components/icons";
import Description from "./components/description";

export default function App() {
  function handleClick() {
    window.location.href = "mailto:wy4pang@uwaterloo.ca?subject=Hi";
  }

  return (
    <div>
      <Navbar />

      <Title />
      <Description />
      <div className="email-container">
        <Button onClick={handleClick}>Email me</Button>
      </div>
      <Icons />
      <Footer />
    </div>
  );
}
