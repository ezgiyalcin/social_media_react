import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./Share.css";
const Share = () => {
  return (
    <div className="container card share">
      <div className="share-top">
        <img className="img-fluid" src="public/assets/person/1.jpeg" alt="" />
        <input
          type="text"
          className="form-control"
          placeholder="What's in your mind?"
        />
      </div>
      <hr className="sidebarHr" />
      <div className="share-bottom ">
        <div>
          <PermMediaIcon htmlColor="tomato" className="share-icon" />
          <span>Photo or Video</span>
        </div>
        <div>
          <LabelIcon htmlColor="blue" className="share-icon" />
          <span>Label</span>
        </div>
        <div>
          <LocationOnIcon htmlColor="green" className="share-icon" />
          <span>Location</span>
        </div>
        <div>
          <EmojiEmotionsIcon htmlColor="goldenrod" className="share-icon" />
          <span>Feelings</span>
        </div>
        <button className="btn btn-primary share-bottom-btn">Share</button>
      </div>
    </div>
  );
};

export default Share;
