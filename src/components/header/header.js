import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React & Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.mitti.se/_internal/cimg!0/2pnak0a9oyceaunpfec0x6alue1ujff.jpeg"
        alt=""
      />
    </div>
  );
}
