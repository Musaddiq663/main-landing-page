const NewsletterAreaHomeOne = () => {
  return (
    <>
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div
              className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="subs_form">
                <h3>Download Now.</h3>
                <h2>Enjoy Free Trial</h2>
                <p>Stay updated with the latest features, tips, and exclusive offers from Light VPN!</p>
                <form onClick={(e) => e.preventDefault()} className="home_subs">
                  <input
                    type="text"
                    className="subscribe__input"
                    placeholder="Enter your Email Address"
                  />
                  <button type="button" className="subscribe__btn">
                    <i className="ti-new-window"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterAreaHomeOne;
