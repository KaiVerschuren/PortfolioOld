import "./style/normalize.css";
import "./style/style.css";
import "./style/components/header.css";
import "./style/utils.css";

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section className="section">
        <Hero />
      </section>
      <section>

      </section>
      
    </div>
  );
}

function Header() {
  return (
    <header className="nav-header container">
      <div className="nav-left">
        <div className="title"><h1>Kai Verschuren</h1></div>
      </div>
      <div className="nav-right">
        <nav className="nav">
          <ul className="no-list-style nav-list">
            <li className="link-1"><a href="">About</a></li>
            <li className="link-2"><a href="">Work | School</a></li>
            <li className="link-3"><a href="">Resume</a></li>
          </ul>
        </nav>
        <div className="nav-contact">
          <button className="btn nav-button">Contact</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-picture">
        <img src="" alt="" />
      </div>
      <div className="hero-hello">
        <h2>Hi, i'm Kai</h2>
        <h1>FRONT-END WEB DEVELOPER</h1>
      </div>
      <div className="hero-subsection">
        <p>
          A passionate <strong>Frontend / Fullstack</strong> web developer and <strong>UI/UX</strong> enthusiast specialized in building stunning interactive websites/applications.
        </p>
      </div>
      <div className="hero-reach-out">
        <button className="btn">Reach Out</button>
      </div>
    </div>
  );
}

export default App;
