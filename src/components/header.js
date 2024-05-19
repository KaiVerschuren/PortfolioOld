function Header() {
    return (
      <header className="nav-header">
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

export default Header;