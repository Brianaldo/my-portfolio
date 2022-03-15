import "./Biodata.css";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";

const Biodata = () => {
  return (
    <div className="Biodata" id="biodata">
      <div className="Profile">
      <h1>BRIANALDO PHANDIARTA</h1>
      <h2>2nd Year - Informatics - Bandung Institute of Technology</h2>
      </div>
      <div className="Skills">
        <h2>Skills:</h2>
        <div className="grid-container">
          <div className="grid-item">
            <FaHtml5 className="Big" />
          </div>
          <div class="grid-item">
            <FaCss3 className="Big" />
          </div>
          <div class="grid-item">
            <FaJsSquare className="Big" />
          </div>
          <div class="grid-item">
            <FaReact className="Big" />
          </div>
          <div class="grid-item">
            <FaNodeJs className="Big" />
          </div>
          <div class="grid-item">
            <FaVuejs className="Big" />
          </div>
          <div class="grid-item">
            <FaPython className="Big" />
          </div>
          <div class="grid-item">
            <FaBootstrap className="Big" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
