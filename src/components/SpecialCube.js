export default function SpecialCube(props) {
  return (
    <a href={props.url} target="#">
      <div
        className="box-container"
        style={{
          bottom: `${props.bottom}px`,
          left: `${props.left}px`,
        }}
      >
        <div className="box--text" style={{ color: props.textColor }}>
          {props.text}
        </div>
        <hr className="box--line" style={{ color: props.textColor }}></hr>
        <img
          className="box--image"
          src={props.image}
          alt={`${props.text} logo`}
        ></img>
        <div className="box-area">
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-front"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-right"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-back"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-left"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-top"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-bottom"
          ></div>
        </div>
      </div>
    </a>
  );
}
