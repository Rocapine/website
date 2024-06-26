import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-title">
          <img src="src/assets/logo.svg" alt="Rocapine Logo" className="logo" />
          <h1 style={{ fontFamily: "Grounded" }}>Rocapine</h1>
        </div>
        <p>A singular health & wellness experience at your fingertips.</p>
      </header>

      <div className="separator" />

      <section className="about">
        <h2>Who we are</h2>
        <p>
          Rocapine is a next-generation mobile app publisher dedicated to
          wellness. Drawing inspiration from the mobile gaming industry's fast
          development approach, we aim to create the new generation of
          world-leading wellness apps enabled by GenAI & a data driven marketing
          approach.
        </p>
        <p>
          The founding team is composed of Stan, JG and Sammy, and we are backed
          by a leading VC firm and seasoned entrepreneurs who brought to life
          leading tech & health space players (such as Adikteev, Alan, Arianee,
          Hexa, Ogury or Opal).
        </p>
      </section>

      <section className="publishing">
        <h2>Publishing</h2>
        <p>
          At Rocapine, we are building a studio-centric publishing platform, to
          empower passionate and talented creators, and scale wellness solutions
          to millions.
        </p>
        <p>
          Our approach is studio-centric rather than app centric, as we believe
          talented teams can achieve multiple successful apps, with the support
          of our publishing platform (Rocapine was created by an ex-Voodoo). We
          aim to empower studios with wellness product expertise, development
          tools and marketing capabilities.
        </p>
        <p>
          Reach out to us <a href="#publishing-form">here</a> if you have a
          published app we can help you scale further, or if you are interested
          in developing wellness apps with Rocapine!
        </p>
      </section>

      <section className="join-us">
        <h2>Join the team</h2>
        <p>
          If you are passionate about wellness and want to improve the life of
          millions of smartphone owners, join our team! We are always hiring at
          several positions:
        </p>
        <ul>
          <li>
            <a href="#product-manager">Product Manager</a>
          </li>
          <li>
            <a href="#designer">Designer</a>
          </li>
          <li>
            <a href="#developer">Developer (React Native or Swift)</a>
          </li>
          <li>
            <a href="#marketing-specialist">Marketing Specialist</a>
          </li>
          <li>
            <a href="#spontaneous-application">Spontaneous Application</a>
          </li>
        </ul>
      </section>

      <div className="separator" />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <p>
          <img
            src="src/assets/circular-logo.svg"
            alt="Rocapine Circular Logo"
            className="logo"
            style={{ width: "100px" }}
          />
        </p>
      </div>
    </div>
  );
};

export default App;
