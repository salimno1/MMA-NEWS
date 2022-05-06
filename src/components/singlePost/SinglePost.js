import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-05/nba-plain--19382c48-848e-4b38-9fcf-03df11ad94e8.png?itok=SFYEHF7E"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Salim</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          corrupti vel illo officiis, ullam in officia nesciunt aliquid, beatae
          dignissimos consequuntur? A quia architecto corporis dignissimos
          consequatur cupiditate sint explicabo?
        </p>
      </div>
    </div>
  );
}
