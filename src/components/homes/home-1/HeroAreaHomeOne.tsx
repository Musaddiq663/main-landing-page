import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../modals/VideoPopup';
import { Typewriter } from 'react-simple-typewriter';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section
        className="home_bg hb_height"
        style={{
          backgroundImage: `url(/assets/img/bg/home-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >

<div className="hero-text ht_top">
  <h1
  data-aos="fade-right"
  data-aos-delay="200"
  data-aos-duration="1000"
  style={{ fontWeight: 500 }} // 👈 Adjusted font weight here
>
  Unlock a World of Secure Browsing

  <span
    className="looped-grey-text"
    style={{
      color: 'grey',
      display: 'inline-block',
      minWidth: '100px',
    }}
  >
    <Typewriter
      words={['Fast', 'Easy',]}
      loop={true}
      cursor={false}
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={2000}
    />
  </span>{' '}
  With LIGHT VPN
</h1>

  <p
    data-aos="fade-right"
    data-aos-delay="400"
    data-aos-duration="1000"
  >
    Safe and Private Internet Access With Light VPN, enjoy secure,
    encrypted browsing that keeps your online activity private and your
    data safe. Access any content you love, bypass restrictions, and
    explore the internet with peace of mind.
  </p>
</div>

              <div
                className="home_btns"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <Link to="/about" className="btn_one">
                  Get Started
                </Link>
                <a
                  className="video-play"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="ti-image"></i>{" "}
                  <span className="video-title">Video Tour</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"i810CxN5Q6Q"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeOne;
