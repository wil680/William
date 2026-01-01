import Title from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Navbar from "./components/navbar";
export default function App() {
  return (
    <div>
      <Navbar />

      <Title />
      <Button>Email me</Button>
      <Footer />
    </div>
  );
}
