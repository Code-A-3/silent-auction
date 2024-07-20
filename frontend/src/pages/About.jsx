import Header from "../components/Header.jsx";
// CSS import is removed as it is being handled in app.jsx
import Footer from "../components/Footer.jsx";

function About(props) {
  return (
    <>
      <Header auth={props.auth} admin={props.admin} runCheck={props.runCheck} />
      <div className="hero">
        <img src="\hero_image.jpeg" alt="Auction Event" />
      </div>
      <div className="about-container">
        <div className="about-section">
          <h2>About Us</h2>
          <p>
            Welcome to the Silent Auction website, your premier destination for
            online auctions that bring together enthusiasts, collectors, and
            philanthropists. Our platform is designed to provide a seamless,
            exciting, and secure auction experience for both bidders and sellers.
            Whether you are looking to bid on exclusive items, donate unique
            treasures, or simply support a charitable cause, Silent Auction
            offers the perfect platform to connect with a community of like-minded
            individuals.
          </p>
          <p>
            At Silent Auction, we host a variety of auctions featuring luxury
            getaways, captivating art pieces, exclusive dining experiences, and
            much more. Our user-friendly interface ensures that you can easily
            navigate through different categories, place bids in real-time, and
            track your favorite items. We pride ourselves on our commitment to
            transparency, fairness, and integrity, ensuring that every auction
            is conducted with the highest standards.
          </p>
          <p>
            Join us in our mission to support important causes and make a
            positive impact in the world. By participating in our auctions, you
            not only have the opportunity to acquire unique items but also
            contribute to various charitable initiatives. Together, we can make
            a difference, one bid at a time.
          </p>
        </div>
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/favicon-trans.png" alt="Arda Kafali" className="team-photo" />
              <h3>Arda Kafali</h3>
              <p>Arda is a software developer with a passion for creating seamless user experiences. He oversees the technical development of the platform.</p>
            </div>
            <div className="team-member">
              <img src="/favicon-trans.png" alt="Alisha Buttar" className="team-photo" />
              <h3>Alisha Buttar</h3>
              <p>Alisha is our project manager, ensuring that all aspects of the auction process run smoothly. She is dedicated to supporting our mission.</p>
            </div>
            <div className="team-member">
              <img src="/favicon-trans.png" alt="Efe Awowede" className="team-photo" />
              <h3>Efe Awowede</h3>
              <p>Efe is a designer with a keen eye for detail, responsible for the visual elements of the platform, ensuring an intuitive and engaging user interface.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
