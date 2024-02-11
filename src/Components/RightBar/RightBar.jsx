import { Users } from "../../dummyData";
import "./RightBar.css";

const RightBar = () => {
  return (
    <div className="rightbar container">
      <div className="right-bar-birthday">
        <img className="gift-jpeg" src="public/assets/gift.png" alt="" />
        <p>
          <b>Pola Foster</b> and <b>3 other friends</b> have birthday today.
        </p>
      </div>
      <img className="advert mb-3" src="public/assets/ad.png" alt="" />
      <b>Online Friends</b>
      {Users.map((user) => (
        <div className="online-friends">
          <div className="right-bar-online-image">
            <img src={user.profilePicture} alt="" />
            <span className="right-icon-badge"></span>
          </div>

          <b>{user.username}</b>
        </div>
      ))}
    </div>
  );
};

export default RightBar;
