const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            {/* Image with left to right animation */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="ab_img mt-5">
                <img src="assets/img/about1.png" className="img-fluid" alt="image" />
              </div>
            </div>

            {/* Content area without AOS on wrapper */}
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <span>About VPN</span>
                <h2>Why Should Use LIGHT VPN?</h2>
              </div>

              {/* Each card now has its own AOS animation */}
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <h4><img src="assets/img/check.png" alt="" />Quick Connect</h4>
                <p>One-tap connection for instant protection on Fire devices.</p>
              </div>
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <h4><img src="assets/img/check.png" alt="" /> HD Streaming</h4>
                <p>Buffer-free, high-resolution streaming on Fire TV.</p>
              </div>
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <h4><img src="assets/img/check.png" alt="" />Zero Logs</h4>
                <p>No tracking or logging of browsing activity.</p>
              </div>
              <div className="abmv" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                <h4><img src="assets/img/check.png" alt="" /> Ad Blocker</h4>
                <p>Blocks ads and malware on Amazon Fire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;
