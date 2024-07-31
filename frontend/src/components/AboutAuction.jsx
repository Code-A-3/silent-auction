import { NavLink } from "react-router-dom"; // Import NavLink for routing if needed
// CSS import is removed as it is being handled in app.jsx

function AboutAuction(props) {
  const currentProgress = props.total;
  let goal = props.target;
  const progressPercent = (currentProgress / goal) * 100;

  return (
    <div>
      <div className="about-section">
        <h2>Ongoing Auction</h2>
        <p>
          Embark on a journey of generosity at our virtual Summer Charity Gala
          Silent Auction, hosted on the cutting-edge Silent Auction platform.
          Delight in bidding on extraordinary luxury getaways, captivating art
          pieces, and exclusive dining experiences, all to champion this
          impactful mission. Experience the thrill of real-time bidding updates
          and seamless transactions, all while supporting a cause that truly
          matters. Do not miss your chance to secure unique treasures and
          contribute to our goal—join us for an unforgettable evening of giving
          and community.
        </p>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p>
            Progress: ${currentProgress.toLocaleString('en-US')} / ${goal.toLocaleString('en-US')}
          </p>
          {props.admin && 
            <div className="set-target-container">
              <form className="mini-form">
              <input
                style={{ backgroundColor: "#f0f0f0" }}
                type="number"
                id="target"
                placeholder='Set target...'
              />
            <button onClick={e => {
              e.preventDefault();
              const newGoal = document.getElementById("target").value;
              props.setTarget(newGoal)
            }} className="button" type="submit">Go</button>
              </form>
            </div>
          }
          {!props.auth && (
            <NavLink className="join-auction-button" to="/login">Login to Join Auction</NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutAuction;
