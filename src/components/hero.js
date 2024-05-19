import placeholder from '../assets/placeholder500x500.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-picture">
        <img src={ placeholder } alt="placeholder image" />
      </div>
      <div className="hero-hello">
        <h2 className="hero-hello-name">Hi, i'm Kai</h2>
        <h1 className="hero-hello-title">FRONT-END WEB DEVELOPER</h1>
      </div>
      <div className="hero-subsection">
        <p>
          A passionate <strong>Frontend / Fullstack</strong> web developer and
          <strong> UI/UX</strong> enthusiast specialized in building stunning
          interactive websites/applications.
        </p>
      </div>
      <div className="hero-reach-out">
        <button className="btn">Reach Out</button>
      </div>
    </div>
  );
}

export default Hero;