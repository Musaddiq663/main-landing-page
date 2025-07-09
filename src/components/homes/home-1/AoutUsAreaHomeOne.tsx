const AoutUsAreaHomeOne = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            {/* Image with left-to-right animation */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="ab_img">
                <img src="assets/img/about2.png" className="img-fluid" alt="image" />
              </div>
            </div>

            {/* Content area with fade-up animation */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="ab_content">
                <span>Welcome To Light vpn</span>
                <h2>World's Leading VPN with a Dedicated DNS System</h2>
                <p>
                  Light VPN provides you with top-notch security and privacy through its own DNS
                  system, ensuring that your online activity remains private and unrestricted. Enjoy
                  seamless browsing, fast connections, and access to global content without
                  compromise.
                </p>
              </div>

              {/* Feature Cards with staggered fade-left animation */}
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                <h4><img src="assets/img/check.png" alt="" /> Fast VPN ----------------------------- 95%</h4>
              </div>
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <h4><img src="assets/img/check.png" alt="" /> Malware Detection------73%</h4>
              </div>
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <h4><img src="assets/img/check.png" alt="" /> Total Security------------------------92%</h4>
              </div>
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <h4><img src="assets/img/check.png" alt="" /> Absolute Privacy--------------81%</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AoutUsAreaHomeOne;
