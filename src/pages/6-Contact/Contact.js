import "./Contact.css";

import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <h1>You can find me on:</h1>
      <a href="https://github.com/Brianaldo" className="a1">
        <FaGithubSquare className="bigs" />
      </a>
      <a href="https://www.linkedin.com/in/brianaldo-phandiarta-a08a011b7/" className="a2">
        <FaLinkedin className="mediums" />
      </a>
      <a href="https://www.instagram.com/brianaldophan/" className="a3">
        <FaInstagramSquare className="smalls" />
      </a>
      <a className="a4">
        <FaFacebookSquare className="mediums" />
      </a>
      <a className="a5">
        <FaTwitterSquare className="smalls" />
      </a>
    </div>
  );
};

export default Contact;
