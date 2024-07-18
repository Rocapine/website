import "./App.css";

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <img src="logo.svg" alt="Rocapine Logo" />
        <h1>Rocapine</h1>
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
          Reach out to us at <strong>contact@rocapine.com</strong> if you have a published app we can help you scale further, or if you
          are interested in developing wellness apps with Rocapine!
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
            <a href="mailto:contact@rocapine.com?subject=Application for Product Manager">
              Product Manager
            </a>
          </li>
          <li>
            <a href="mailto:contact@rocapine.com?subject=Application for Designer">
              Designer
            </a>
          </li>
          <li>
            <a href="mailto:contact@rocapine.com?subject=Application for Developer (React Native or Swift)">
              Developer (React Native or Swift)
            </a>
          </li>
          <li>
            <a href="mailto:contact@rocapine.com?subject=Application for Marketing Specialist">
              Marketing Specialist
            </a>
          </li>
          <li>
            <a href="mailto:contact@rocapine.com?subject=Spontaneous Application">
              Spontaneous Application
            </a>
          </li>
        </ul>
      </section>

      <div className="separator" />

      <div className="footer">
        <img src="logo.svg" alt="Rocapine Logo" />
        <h1>Rocapine</h1>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </div>
    </div>
  );
};

export default Home;
