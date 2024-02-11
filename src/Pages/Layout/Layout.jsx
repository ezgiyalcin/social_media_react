import "./Layout.css";

import { Outlet, Link, useRoutes } from "react-router-dom";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Users } from "../../dummyData";

const Layout = () => {
  return (
    <div className="d-flex  layout-container ">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList d-flex flex-column gap-3">
            <div className="">
              <RssFeedIcon />
              <Link className="aside-link" to="/">
                Feed
              </Link>
            </div>
            <div className="">
              <ChatIcon />
              <Link className="aside-link" to="/">
                Chats
              </Link>
            </div>
            <div className="">
              <PlayCircleIcon />
              <Link className="aside-link" to="/">
                Videos
              </Link>
            </div>
            <div className="">
              <GroupIcon />
              <Link className="aside-link" to="/">
                Groups
              </Link>
            </div>
            <div className="">
              <BookmarkIcon />
              <Link className="aside-link" to="/">
                Bookmarks
              </Link>
            </div>
            <div className="">
              <HelpOutlineIcon />
              <Link className="aside-link" to="/">
                Questions
              </Link>
            </div>
            <div className="">
              <WorkOutlineIcon />
              <Link className="aside-link" to="/">
                Jobs
              </Link>
            </div>
            <div className="">
              <EventIcon />
              <Link className="aside-link" to="/">
                Events
              </Link>
            </div>
            <div className="">
              <SchoolIcon />
              <Link className="aside-link" to="/">
                Courses
              </Link>
            </div>
            <div className="btn-div">
              <button className="btn btn-secondary">Show More</button>
            </div>
            <hr className="sidebarHr" />
            {Users.map((user) => (
              <div className="">
                <img src={user.profilePicture} alt="" />
                <Link className="aside-link" to="/">
                  {user.username}
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
