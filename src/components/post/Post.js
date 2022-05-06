import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-05/nba-plain--1bf677e2-987b-4765-9879-c2183d8e1a63.jpeg?itok=ixWgVxa0"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Crypto</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus a
        inventore soluta hic, harum reiciendis aut voluptatum tempore fuga
        veniam explicabo dolorum eaque praesentium distinctio saepe, accusantium
        enim autem quas. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Temporibus a inventore soluta hic, harum reiciendis aut voluptatum
        tempore fuga veniam explicabo dolorum eaque praesentium distinctio
        saepe, accusantium enim autem quas. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Temporibus a inventore soluta hic, harum
        reiciendis aut voluptatum tempore fuga veniam explicabo dolorum eaque
        praesentium distinctio saepe, accusantium enim autem quas. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Temporibus a inventore
        soluta hic, harum reiciendis aut voluptatum tempore fuga veniam
        explicabo dolorum eaque praesentium distinctio saepe, accusantium enim
        autem quas.
      </p>
    </div>
  );
}
