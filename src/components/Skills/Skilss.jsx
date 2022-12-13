import ProgressBar from "react-bootstrap/ProgressBar";

function ContextualExample() {
  return (
    <div className="skills">
      <h5 style={{ marginLeft: "12%",  position:'absolute' }}>HTML</h5>
      <ProgressBar className="skill-one" variant="success" now={40} />
      <h5 style={{ marginLeft: "12%" }}>   SCC</h5>
      <ProgressBar className="skill-two" variant="info" now={20} />
      <h5 style={{ marginLeft: "12%" }}>JavaScript</h5>
      <ProgressBar className="skill-three" variant="warning" now={60} />
    </div>
  );
}

export default ContextualExample;
