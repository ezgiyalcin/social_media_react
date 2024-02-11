import { useState } from "react";
import { PostList, Users } from "../../dummyData";
import "./Posts.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Posts = () => {
  return PostList.map((post) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
      setLike(isLiked ? like - 1 : like + 1);
    };

    return (
      <div className="container card post" key={post.id}>
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span>{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="post-top-left-date ">{post.date}</span>
          </div>

          <MoreVertIcon />
        </div>
        <p>{post?.desc}</p>
        <div className="post-mid">
          <img src={post.photo} alt="" />
        </div>
        <div className="post-bottom">
          <img onClick={handleClick} src="public/assets/like.png" alt="" />
          <div className="likes">
            <img onClick={handleClick} src="public/assets/heart.png" alt="" />
            <p>{like} people like it</p>
          </div>
          <p className="comments">{post.comment} Comments</p>
        </div>
      </div>
    );
  });
};

export default Posts;
