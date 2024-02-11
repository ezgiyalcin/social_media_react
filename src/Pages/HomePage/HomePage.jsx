import Posts from "../../Components/Posts/Posts";
import Share from "../../Components/Share/Share";
import RightBar from "../../Components/RightBar/RightBar";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <div>
        <Share />

        <Posts />
      </div>

      <RightBar />
    </div>
  );
};

export default HomePage;
