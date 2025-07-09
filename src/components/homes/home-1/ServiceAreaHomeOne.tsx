import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// slider setting 
const slider_setting = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const slider_data = [
  "*Access Control Lists*",
  "*Search Functionalty*",
  "*legal Disclaimers*",
  "*Network Seqmenttation*",
  "*Feedback & Reporting*",
  "*Access Control Lists*",
  "*Search Functionalty*",
  "*legal Disclaimers*",
  "*Network Seqmenttation*",
  "*Feedback & Reporting*",
];

const ServiceAreaHomeOne = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            {/* Title area animation */}
            <div
              className="col-lg-6 col-sm-6 col-xs-12"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="section-title">
                <span>Our services</span>
                <h2>We Offer The Fastest & <br />Simplest VPN</h2>
              </div>
            </div>

            {/* Button animation */}
            <div
              className="col-lg-6 col-sm-6 col-xs-12"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="ser_btn">
                <Link to="/service" className="btn_two">
                  View all services <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Service cards with staggered animations */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="single_service">
                <img src="assets/img/Ser1.png" className="img-fluid" alt="image" />
                <h2>Fast Server Switch</h2>
                <p>Change servers with one click for uninterrupted streaming.</p>
                <Link to="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="single_service">
                <img src="assets/img/service2.png" className="img-fluid" alt="image" />
                <h2>Unlimited Bandwidth</h2>
                <p>No data caps for endless streaming and browsing.</p>
                <Link to="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="single_service">
                <img src="assets/img/service3.png" className="img-fluid" alt="image" />
                <h2>24/7 Support</h2>
                <p>Our team is here 24/7 to help with any issues.</p>
                <Link to="/service">Read More <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Add fade animation to marquee */}
      <div
        className="marq_text"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div id="supermarquee1">
          <Slider
            {...slider_setting}
            className="swiper-container tp-text-slider-4-active"
          >
            {slider_data.map((item, i) => (
              <div key={i} className="me-4">
                {item}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeOne;
