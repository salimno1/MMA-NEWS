import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const publicFolder = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={publicFolder + post.photo} alt="" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            <span className="postCat">{c.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link1">
          <p className="postTitle">{post.title}</p>
        </Link>

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      <Link to={`/post/${post._id}`} className="link">
        <button className="readMoreLink">Read more</button>
      </Link>
    </div>
  );
}
