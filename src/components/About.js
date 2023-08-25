export default function About() {
  return (
    <div className="about">
      <input type="checkbox" className="about--checkbox" id="about--checkbox" />
      <label htmlFor="about--checkbox" className="about--label">
        ABOUT
      </label>
      <div className="collapsible--container">
        <p className="collapsible--content">
          This webpage was made by Bathinjan using React, ThreeJS, React Fiber,
          and a bit of CSS heavy lifting.
        </p>
      </div>
    </div>
  );
}
