import logo from "./logo.svg";
import "./App.css";
import Scroller from "./components/Scroller/Scroller";
import LandingPage from "./pages/1-LandingPage/LandingPage";
import Biodata from "./pages/2-Biodata/Biodata";
import Portfolio1 from "./pages/3-Portfolio1/Portfolio1";
import Portfolio2 from "./pages/4-Portfolio2/Portfolio2";
import Portfolio3 from "./pages/5-Portfolio3/Portfolio3";
import Contact from "./pages/6-Contact/Contact";
import { useRef, useState, useEffect } from "react";

function App() {
  const landingPageRef = useRef(null);
  const biodataRef = useRef(null);
  const portfolio1Ref = useRef(null);
  const portfolio2Ref = useRef(null);
  const contactRef = useRef(null);

  const [currY, setCurrY] = useState(window.pageYOffset);

  useEffect(() => {
    const onScroll = () => {
      setCurrY(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wheelHandler = (event) => {
    if (event.nativeEvent.wheelDelta > 0) {
      // console.log("scroll up");
      if (currY === landingPageRef.current.offsetTop) {
        /* do nothing */
      } else if (currY === biodataRef.current.offsetTop) {
        landingPageRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === portfolio1Ref.current.offsetTop) {
        biodataRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === portfolio2Ref.current.offsetTop) {
        portfolio1Ref.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === contactRef.current.offsetTop) {
        portfolio2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // console.log("scroll down");
      if (currY === landingPageRef.current.offsetTop) {
        biodataRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === biodataRef.current.offsetTop) {
        portfolio1Ref.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === portfolio1Ref.current.offsetTop) {
        portfolio2Ref.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === portfolio2Ref.current.offsetTop) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (currY === contactRef.current.offsetTop) {
        /* do nothing */
      }
    }
  };

  // const debouncedEventHandler = useMemo(() => debounce(wheelHandler, 300), []);

  // const throttledEventHandler = useMemo(() => throttle(wheelHandler, 300), []);

  return (
    <div
      className="App"
      onWheel={(event) => {
        if (event.nativeEvent.wheelDelta > 0) {
          console.log("scroll up");
          if (currY === landingPageRef.current.offsetTop) {
            /* do nothing */
          } else if (currY === biodataRef.current.offsetTop) {
            landingPageRef.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === portfolio1Ref.current.offsetTop) {
            biodataRef.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === portfolio2Ref.current.offsetTop) {
            portfolio1Ref.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === contactRef.current.offsetTop) {
            portfolio2Ref.current.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          console.log("scroll down");
          if (currY === landingPageRef.current.offsetTop) {
            biodataRef.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === biodataRef.current.offsetTop) {
            portfolio1Ref.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === portfolio1Ref.current.offsetTop) {
            portfolio2Ref.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === portfolio2Ref.current.offsetTop) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          } else if (currY === contactRef.current.offsetTop) {
            /* do nothing */
          }
        }
      }}
    >
      <Scroller />
      <div ref={landingPageRef}>
        <LandingPage />
      </div>
      <div ref={biodataRef}>
        <Biodata ref={biodataRef} />
      </div>
      <div ref={portfolio1Ref}>
        <Portfolio1 />
      </div>
      <div ref={portfolio2Ref}>
        <Portfolio2 />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
