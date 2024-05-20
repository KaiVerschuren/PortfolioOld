import "./style/normalize.css";
import "./style/style.css";
import "./style/components/scrollbar.css";
import "./style/components/header.css";
import "./style/components/hero.css";
import "./style/components/about.css";
import "./style/components/technologiesScroller.css";
import "./style/utils.css";

import Header from "./components/header.js";
import Hero from "./components/hero.js";
import About from "./components/about.js";

function App() {
  return (
    <div>
      <section className="container">
        <Header />
      </section>
      <section className="container">
        <Hero />
      </section>
      <section id="about" className="about-section section">
        <About />
      </section>
    </div>
  );
}

export default App;
