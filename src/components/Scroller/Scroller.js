import { Link } from "react-scroll";

import "./Scroller.css";

const Scroller = () => {
  return (
    <div className="Scroller">
      <Link className="dot" activeClass="active" to="landing-page" spy={true} smooth={true} />
      <Link className="dot" activeClass="active" to="biodata" spy={true} smooth={true} />
      <Link className="dot" activeClass="active" to="portfolio-1" spy={true} smooth={true} />
      <Link className="dot" activeClass="active" to="portfolio-2" spy={true} smooth={true} />
      <Link className="dot" activeClass="active" to="portfolio-3" spy={true} smooth={true} />
      <Link className="dot" activeClass="active" to="contact" spy={true} smooth={true} />
    </div>
  );
};

export default Scroller;
