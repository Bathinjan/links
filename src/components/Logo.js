import logo from "../images/bath.gif";

//* This is loaded as a separate component due to:
// 1. Absolute positioning constraints
// 2. Place in a Navbar would block the ability for OrbitControls (in Planet.js) to track mouse movement (it looks janky)
export default function Logo() {
  return (
    <div className="Logo">
      <a href="https://bathinjan.github.io/home" target="#">
        <img className="logo" src={logo} alt="Bathinjan Logo"></img>
      </a>
    </div>
  );
}
