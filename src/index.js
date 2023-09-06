import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ro from "./imgfolder/ro.jpg";
import Footer from "./Footer"
function Home() {
  return (
    <>
      <div className="ro">
        <button className="r">
          <h1 className="h">
            <a className="l" href="https://events.vit.ac.in/">
              Register
            </a>
          </h1>
        </button>
        <button className="r">
          <h1 className="h">
            <a
              className="l"
              href="https://firebasestorage.googleapis.com/v0/b/knowhenit.appspot.com/o/Robowars%20Rulebook.pdf?alt=media&token=6ba1ea0e-309c-4bdb-9e12-cefac59f899a"
            >
              Rulebook
            </a>
          </h1>
        </button>
        <footer>
        <Footer></Footer>
        </footer>

      </div>

    </>
  );
}
function AboutUs() {
  const [robo, changer] = useState(
    "ROBOWARS is the flagship event of graVITas and one of the biggest combat robotics events in India. More than 40 bots engage in thrilling battles around-the-clock in the largest and safest arena in India for a chance to win the championship with their war machines. It proves to be an adrenaline rush to the participants as well as the audience. Teams all over the globe gather here to show off their fighting spirits and attain glory."
  );
  const robowar = () => {
    changer(
      "ROBOWARS is the flagship event of graVITas and one of the biggest combat robotics events in India. More than 40 bots engage in thrilling battles around-the-clock in the largest and safest arena in India for a chance to win the championship with their war machines. It proves to be an adrenaline rush to the participants as well as the audience. Teams all over the globe gather here to show off their fighting spirits and attain glory."
    );
  };
  const robotics = () => {
    changer(
      "We, RoboVITics-The official club of VIT, are a collection of vehement tech enthusiasts with the aspiration to learn and hone our skills & the drive to excel. As the official robotics club of VIT Vellore, our motto is to support aspiring robotics enthusiasts in working on jaw-dropping projects and discovering their specialities by holding numerous interactive workshops, seminars, and practical sessions. We work together on some remarkable projects and support exemplary teams that have received numerous accolades."
    );
  };

  return (
    <>
      <h1 className="ah">About Us</h1>
      <div className="v">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XJOkXspQZ34?si=By48CpL4Z8LAdknR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="robo">
        <p>{robo}</p>
        <button className="rw" onClick={robowar}>
          Robowars
        </button>
        <button className="rv" onClick={robotics}>
          Robovitics
        </button>
      </div>
 
      <div className="ag">
        <h1 className="hg">About graVITas</h1>
        <img
          src="https://gravitas.vit.ac.in/_next/image?url=%2FfooterAssets%2FupdateFooterImg.png&w=1080&q=75"
          alt="Gravitas image" className="ig"
        ></img>
        
          
    
        <div>
          <p className="Black">
            VIT's annual techno-management carnival of knowledge, Gravitas, aims
            to entertain and enrich the technological skills of the students and
            the researchers by having a plethora of innovative events in every
            avenue of engineering.
          </p>
          <Footer></Footer>
        </div>
      </div>
    
    </>
  );
}
function Match() {
  const match = [
    "sanath vs vedh",
    "ramit vs sanath",
    "vedh vs ramit",
    "hemesh vs sanath",
  ];
  const [i, changei] = useState(0);

  const rights = () => {
    if (i < match.length - 1) {
      changei(i + 1);
    } else {
      changei(0);
    }
  };
  const lefts = () => {
    if (i > 0) {
      changei(i - 1);
    } else {
      changei(match.length - 1);
    }
  };
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="ma">Matches</h1>
      <div>
        <h2>{match[i]}</h2>
        <button onClick={lefts}>&lt;</button>
        <button onClick={rights}>&gt;</button>
      </div>
    </>
  );
}
function Timeline() {
  return (
    <>
      <h1 className="ht">Timeline</h1>
      <div className="tl">
        <div className="t1">
          <h2>Opening Ceremony</h2>
          <h3>September30th  ,2022</h3>
          <img
            src="https://i.pinimg.com/1200x/10/05/48/100548600cbe79a222d3ccab1b0a8014.jpg"
            className="ar"
          ></img>
        </div>

        <div className="t3">
          <h2 id="m">Matches</h2>
          <img
            src="https://i.pinimg.com/1200x/10/05/48/100548600cbe79a222d3ccab1b0a8014.jpg"
            className="ar1"
          ></img>
        </div>

        <div className="t2">
          <h2>Closing Ceremony</h2>
          <h3>October 2nd ,2022</h3>
        </div>
      </div>
      <h1 id="pmh">Publications and Media</h1>

      <div className="pm">
        <div>
          <img
            className="pmi"
            src="https://res.cloudinary.com/robovitics/image/upload/c_scale,h_240,w_210/v1663824595/Robowars2022/Asset_4_lafteo.png"
          ></img>
          <img
            className="pmi"
            src="https://res.cloudinary.com/robovitics/image/upload/c_fit,h_240,w_210/v1663824686/Robowars2022/Asset_3_n3eooq.png"
          ></img>
          <img
            className="pmi"
            src="https://res.cloudinary.com/robovitics/image/upload/c_fit,h_240,w_210/v1663824737/Robowars2022/Asset_1_it1qu9.png"
          ></img>
          <img
            className="pmi"
            src="https://res.cloudinary.com/robovitics/image/upload/c_pad,h_240,w_210/v1663825060/Robowars2022/WhatsApp_Image_2022-09-22_at_10.44.00_AM_azuamy.jpg"
          ></img>
        </div>
        <h1 className="ec">Event Categories</h1>
        <div>
          <div>
            <h2>FeatherWeigth(15kg)</h2>
            <div>
              <img></img>
            </div>
            <div>
              <h2>MiddleWeigth(60kg)</h2>
              <img></img>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
function FAQ() {
  const q = [
    {
      q: "When and Where is Robowar Happening?",
      a: "RoboWars will be Happening during gravitas",
    },

    {
      q: "Number of Teams Participating?",
      a: "40",
    },
    {
      q: "why robowar?",
      a: "coz it is thrill",
    },
  ];

  const [ik, ch] = useState(0);

  const [qa, changeq] = useState(q[ik].q);

  const ans = () => {
    changeq(q[ik].a);
  };
  const qu = () => {
    changeq(q[ik].q);
  };
  const cq = () => {
    if (ik < q.length - 1) {
      ch(ik + 1);
      changeq(q[ik + 1].q);
    } else {
      ch(0);
      changeq(q[0].q);
    }
  };

  return (
    <>
    <br>
    </br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1 className="faq">FAQ</h1>
      <div>
        <h3 onMouseOver={ans} onMouseLeave={qu}>
          {qa}
        </h3>
        <h5 className="ak">For Answer hover over Question</h5>

        <button className="nq" onClick={cq}>Next Question</button>
      </div>
      <h1 className="sp">Sponsors</h1>
     <Footer></Footer>
    </>
  );
}
function Contact() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className="co">Contact</h1>
        <h2>Email:robovitics@gmail.com</h2>
        <h2>Insta ID:</h2>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

function App() {
  const [page, changepage] = useState(<Home />);
  function Header(props) {
    return (
      <div className="head">
        <div className="h1">
          <button className="b" onClick={home}>
            Home
          </button>
          <button className="b" onClick={faq}>
            FAQ
          </button>
          <button className="b" onClick={timeline}>
            Timeline
          </button>
        </div>

        <img className="g1" src="https://res.cloudinary.com/robovitics/image/upload/v1663778805/Robowars2022/MOSHED-2022-9-20-15-33-9-unscreen_nu5a4j.gif"></img>

        <div className="h2">
          <button className="b" onClick={aboutus}>
            About Us
          </button>
          <button className="b" onClick={contact}>
            Contact
          </button>
          <button className="b" onClick={match}>
            Matches
          </button>
        </div>
      </div>
    );
  }

  const home = () => {
    changepage(<Home />);
  };
  const aboutus = () => {
    changepage(<AboutUs />);
  };
  const timeline = () => {
    changepage(<Timeline />);
  };
  const faq = () => {
    changepage(<FAQ />);
  };
  const contact = () => {
    changepage(<Contact />);
  };
  const match = () => {
    changepage(<Match />);
  };
  return (
    <div>
      <Header />
      {page}
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));