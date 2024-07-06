import logo from "../images/bath.gif";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a href="https://github.com/bathinjan" target="#">
          <img className="logo" src={logo} alt="Bathinjan Logo"></img>
        </a>
      </div>
      <div className="about">
        <input
          type="checkbox"
          className="about--checkbox"
          id="about--checkbox"
        />
        <label htmlFor="about--checkbox" className="about--label">
          ABOUT
        </label>
        <div className="collapsible--container">
          <p className="collapsible--content">
            This webpage was made by Bathinjan using React and a bit of CSS
            heavy lifting
          </p>
        </div>
      </div>
    </nav>
  );
}
