import logo from "../media/coolors.png";
import down_icon from "../media/icons/down-arrow.png";
import save_icon from "../media/icons/save.png";
import menu_icon from "../media/icons/menu.png";

function Header(props) {
  function menu_pressed () {
    props.callback();
  }
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <p>Tools <img src={down_icon} alt="tools-icon" /></p>
          <span>Go Pro</span>
        </div>
      </nav>
      <div className="functions">
        <p>Press the space bar to generate color palettes!</p>
        <div className="right">
          <span className="save">
            <img src={save_icon} alt="save-icon" /> Save
          </span>
          <span className="menu" onClick={menu_pressed}>
            <img src={menu_icon} alt="menu-icon" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
