import "./LandingPage.css";
import TypeAnimation from 'react-type-animation';

const LandingPage = () => {
  return (
    <div className="LandingPage" id="landing-page">
      <div className="introduction">
        <TypeAnimation
          cursor={true}
          sequence={[
            "Hi, ",
            2000,
            "I’m a student at Bandung Institute of Technology and a future Software Engineer.",
          ]}
          wrapper="a"
          repeat={1}
        />
      </div>
    </div>
  );
};

export default LandingPage;
