import React from "react";
import "./ProfilePage.css";
import Share from "./../../Components/Share/Share";
import Posts from "./../../Components/Posts/Posts";
import RightBar from "../../Components/RightBar/RightBar";

const ProfilePage = () => {
  return (
    <>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
            <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Safak Kocaoglu</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="d-flex gap-3 mt-4">
          <div>
            <Share />
            <Posts />
          </div>
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
