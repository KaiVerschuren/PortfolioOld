import "./style/normalize.css";
import "./style/style.css";
import "./style/components/header.css";
import "./style/components/hero.css";
import "./style/utils.css";

import Header from './components/header.js';
import Hero from './components/hero.js';

function App() {
  return (
    <div>
      <section className="container">
        <Header />
      </section>
      <section className="container">
        <Hero />
      </section>
      <section>

      </section>
      
    </div>
  );
}

export default App;
