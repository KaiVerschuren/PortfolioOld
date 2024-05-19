import "./style/normalize.css";
import "./style/style.css";
import "./style/components/header.css";
import "./style/components/hero.css";
import "./style/utils.css";

import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';

function App() {
  return (
    <div>
      <section className="container">
        <Header />
      </section>
      <section className="container">
        <Hero />
      </section>
      <section className="container section">
        <About />
      </section>
    </div>
  );
}

export default App;
