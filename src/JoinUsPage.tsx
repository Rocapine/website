import "./JoinUsPage.css";

const JoinUsPage = () => {
  return (
    <div className="JoinUsPage">
      <section className="mission">
        <h2>Mission</h2>
        <p>
          At Rocapine, we are on a mission to build mobile apps providing a
          singular experience to consumers on a global scale. We thrive on
          collaboration and inclusivity, by building and delivering standout,
          marketable concepts. Join us in revolutionizing global well-being
          through cutting-edge mobile technology and make a meaningful &
          positive impact!
        </p>
      </section>

      <section className="values">
        <h2>Values</h2>
        <p>
          We built our company to make an impact, that’s why we foster a
          collaborative and ego-free environment. Everyone has the ability to
          contribute and make changes. We trust our colleagues to make the right
          choices. We are not afraid to fail fast individually to learn
          collectively in the long run.
        </p>
      </section>

      <section className="team">
        <h2>Team</h2>
        <p>
          The founding team is composed of Stan (Voodoo), JG (Quantonation) and
          Sammy (Theodo, Libeo), and we are backed by a leading VC firm and
          seasoned entrepreneurs from the tech & health space.
        </p>
      </section>

      <section className="join-us">
        <h2>Join us!</h2>
        <p>
          If you are passionate about wellness and want to bring wellness
          solutions to millions of people, join the team{" "}
          <a href="#rh-form">here</a>!
        </p>
        <p>
          We are actively seeking product managers, designers, developers (react
          native or swift) and marketing specialists.
        </p>
        <a href="link-to-our-offers">Our offers on Notion</a>
      </section>
    </div>
  );
};

export default JoinUsPage;
