import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="ab_content">
                <span>Welcome to Light VPN</span>
                <h2>The Ultimate VPN Solution with Our Own DNS System.</h2>
                <p>Experience unmatched online privacy and security with Light VPN. Enjoy fast, reliable connections that keep your data safe and your online activities private.</p>
              </div>
              <div className="abmv_list" data-aos="fade-up" data-aos-delay="200">
                <ul>
                  <li><img src="assets/img/check.png" alt="" /> Secure user access to data and applications system.</li>
                  <li><img src="assets/img/check.png" alt="" /> A security-first approach to protect customer workloads.</li>
                  <li><img src="assets/img/check.png" alt="" /> Extend security and risk mitigation capabilities now.</li>
                  <li><img src="assets/img/check.png" alt="" /> Safeguard your most valuable asset—data.</li>
                </ul>
              </div>
              <div className="skill_btn" data-aos="fade-up" data-aos-delay="300">
                <Link to="/service" className="btn_one">Get your services <i className="ti-arrow-top-right"></i></Link>
                <a href="#" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="ab_img ai_top">
                <p>Maximize value with our on-demand, outcome-based, transparent vulnerability assessment, automated remediation.</p>
                <img src="assets/img/about3.png" className="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
