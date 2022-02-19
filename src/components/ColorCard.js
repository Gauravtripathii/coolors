import copy_icon from "../media/icons/copy-icon.png";

function ColorCard(props) {
  const inlineStyle = {
    background: props.color,
  };

  return (
    <div className="color-card" style={inlineStyle}>
      <div className="color-functions" onClick={(e)=>{navigator.clipboard.writeText(props.color.slice(1))}}>
        <p>
          <img src={copy_icon} alt="copy" />
        </p>
      </div>
      <p>{props.color.slice(1)}</p>
    </div>
  );
}

export default ColorCard;
