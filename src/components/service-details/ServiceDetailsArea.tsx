import { useState } from 'react';
import VideoPopup from '../../modals/VideoPopup';

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="single_service_details">
                <img src="assets/img/service_details.jpg" className="img-fluid" alt="image" />
                <h2 data-aos="fade-right" data-aos-delay="200">Business Analysis And Solution Program</h2>
                <p data-aos="fade-up" data-aos-delay="300">
                  The difference between short-form and long-form videos is simple: short-form videos are short, and long-form videos are long. To be more specific, short-form videos are typically under 10 minutes long, while long-form videos exceed that 10-minute mark. You’ll see a lot of short-form videos on social media. Target, for example, uses this video format on Instagram to advertise its products.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  Youll typically see longer videos on a businesss website or YouTube. Video and podcast hosting provider, Wistia, uses long-form video to educate its audience about the cost of video production.
                </p>
              </div>

              <div
                className="video-area"
                style={{
                  backgroundImage: `url(assets/img/video.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="magnific_popup video-button"
                >
                  <i className="ti-image"></i>
                </a>
              </div>

              <div className="single_ssd_info" data-aos="fade-up" data-aos-delay="600">
                <h4>Service Benefits</h4>
                <p>
                  Content is king in the digital world. Agencies produce high-quality content, including blog posts, videos, infographics, and more, to engage and educate the target audience. Content marketing builds trust and authority for the brand. Agencies manage and grow a brand's presence on social media platforms such as Facebook, Twitter, LinkedIn, and Instagram.
                </p>
              </div>

              <div className="single_ssd_info" data-aos="fade-up" data-aos-delay="700">
                <h4>Low Cost Our Fee</h4>
                <p>
                  Content is king in the digital world. Agencies produce high-quality content, including blog posts, videos, infographics, and more, to engage and educate the target audience. Content marketing builds trust and authority for the brand. Agencies manage and grow a brand's presence on social media platforms such as Facebook, Twitter, LinkedIn, and Instagram.
                </p>
              </div>

              <div className="single_ssd_info" data-aos="fade-up" data-aos-delay="800">
                <h4>Tips & tricks</h4>
                <p>
                  Content is king in the digital world. Agencies produce high-quality content, including blog posts, videos, infographics, and more, to engage and educate the target audience. Content marketing builds trust and authority for the brand. Agencies manage and grow a brand's presence on social media platforms such as Facebook, Twitter, LinkedIn, and Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
      {/* video modal end */}
    </>
  );
};

export default ServiceDetailsArea;
