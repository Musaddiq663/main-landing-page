

const VpnDownloadSection = () => {
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
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="ab_content">
                <span>Secure & Fast</span>
                <h2>Download Light VPN App</h2>
                <p>
                  Protect your Amazon Fire devices with Light VPN. Enjoy quick connection, ad-free browsing, unlimited streaming, and secure global access—all optimized for Fire Tablets and TVs. Get started with one tap and experience seamless online security anytime, anywhere.


                </p>
              </div>

              {/* Download Buttons */}
              <div className="row mt-4">
                <div className="col-6 col-sm-4 col-md-4">
                  <a href="#" target="_blank">
                    <img
                      src="assets/img/google-play.png"
                      className="img-fluid"
                      alt="Google Play"
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-4 col-md-4">
                  <a href="#" target="_blank">
                    <img
                      src="assets/img/app-store.png"
                      className="img-fluid"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="sk_img">
                <img
                  src="assets/img/vpn-phone.png"
                  className="img-fluid"
                  alt="VPN App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VpnDownloadSection;
