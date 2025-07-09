import { Link } from "react-router-dom";

const ChooseAreaHomeOne = () => {
  return (
    <>
      <section
        className="why_area section-padding"
        style={{
          backgroundImage: `url(assets/img/bg/section-2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="ab_content">
                <span>Easy Setup</span>
                <h2>Quick and seamless installation on Amazon Fire devices.</h2>
                <p>
                  Light VPN offers quick and easy setup on Amazon Fire devices, allowing seamless
                  installation so you can get started right away. With the Fire TV remote control,
                  navigating the VPN is simple, and the interface is optimized specifically for Fire
                  Tablets and Fire TVs. Enjoy instant access to global content, enabling you to
                  stream Netflix, Hulu, and more from any country directly on your Fire TV.
                </p>
              </div>

              <div className="row">
                <div
                  className="col-lg-4 col-sm-4 col-xs-12 no-padding"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <div className="single-project2">
                    <h2 className="counter-num">94%</h2>
                    <h4>Quality services</h4>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-4 col-xs-12 no-padding"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <div className="single-project2">
                    <h2 className="counter-num">69%</h2>
                    <h4>Skilled Staff</h4>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-4 col-xs-12 no-padding"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  <div className="single-project2">
                    <h2 className="counter-num">99%</h2>
                    <h4>Support team</h4>
                  </div>
                </div>

                <div
                  className="skill_btn"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  <Link to="/service" className="btn_one">
                    Get your services <i className="ti-arrow-top-right"></i>
                  </Link>
                  <a href="#" className="btn_two">
                    Contact with us <i className="ti-arrow-top-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="sk_img">
                <img src="assets/img/computer.png" className="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseAreaHomeOne;
