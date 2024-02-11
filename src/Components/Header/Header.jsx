import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  return (
    <div className="header-container fixed-top">
      <div className="header-left">SocialFriends</div>
      <div className="header-center">
        <SearchIcon className="searchIcon" />
        <input
          placeholder="Search for friend, post or video"
          className="searchInput"
        />
      </div>
      <div className="header-right">
        <div className="header-links">
          <Link className="header-link" to={"/"}>
            Home Page
          </Link>
          <Link className="header-link" to={"/profile"}>
            My Profile
          </Link>
        </div>
        <div className="header-icons">
          <div className="header-icon-item ">
            <PersonIcon />
            <span className="header-icon-badge">1</span>
          </div>
          <div className="header-icon-item ">
            <MessageIcon />
            <span className="header-icon-badge">5</span>
          </div>
          <div className="header-icon-item ">
            <NotificationsIcon />
            <span className="header-icon-badge">3</span>
          </div>
        </div>
      </div>
      <img
        className="header-profile-img"
        src="public/assets/person/1.jpeg"
        alt=""
      />
    </div>
  );
};

export default Header;
