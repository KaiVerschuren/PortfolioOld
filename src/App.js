import "./style/normalize.css";
import "./style/style.css";
import "./style/components/header.css";
import "./style/utils.css";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="nav-header container">
      <div className="title">Kai Verschuren</div>
      <nav className="nav">
        <ul className="no-list-style">
          <li className="link-1">Link 1</li>
          <li className="link-2">Link 2</li>
          <li className="link-3">Link 3</li>
        </ul>
      </nav>
      <div className="contact">
        <button className="btn">Contact</button>
      </div>
    </header>
  );
}

export default App;
