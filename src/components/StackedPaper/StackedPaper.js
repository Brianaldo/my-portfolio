import Peta from "../3-Portfolio1/Peta/Peta";
import PaiceLogo from "./PAICE.png";
import "./StackedPaper.css";

const StackedPaper = () => {
  return (
    <div class="paper">
      <img src={PaiceLogo} className="logo-paice" />
      <br/>
      <Peta />
    </div>
  );
};

export default StackedPaper;
