import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Services">Parallax</section>
    <section>services</section>
    <section id="Portfolio">parallax</section>
    <section>portfolio1</section>
    <section>portfolio2</section>
    <section >portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
