import ColorCard from "./ColorCard";

function Palette(props) {
  var randomColor = require("randomcolor");
  // var color = randomColor({
  //   count: 5,
  // });

  var color = [
    randomColor({ hue: "green" }),
    randomColor({ hue: "red" }),
    randomColor({ hue: "yellow" }),
    randomColor({ hue: "blue" }),
    randomColor({ hue: "orange" }),
  ];

  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      window.location.reload();
    }
  });
  return (
    <div className={props.navOn ? "palette palette-sm" : "palette"}>
      <div className={props.navOn ? "nav-menu active" : "nav-menu"}>
        yooooo
      </div>
      <ColorCard color={color[0]} />
      <ColorCard color={color[1]} />
      <ColorCard color={color[2]} />
      <ColorCard color={color[3]} />
      <ColorCard color={color[4]} />
    </div>
  );
}

export default Palette;
