import "./LandingPage.css";
import TypeAnimation from 'react-type-animation';

const LandingPage = () => {
  return (
    <div className="LandingPage" id="landing-page">
      <div className="introduction">
        <TypeAnimation
          cursor={true}
          sequence={[
            "Hi, Welcome to my Portfolio",
            2000,
          ]}
        />
      </div>
    </div>
  );
};

export default LandingPage;
