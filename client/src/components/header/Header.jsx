import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">MongoDb</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpapercave.com/wp/wp3537545.jpg"
        alt=""
      />
    </div>
  );
}
