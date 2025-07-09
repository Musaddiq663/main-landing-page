import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonialData {
  name: string;
  description: string;
}

const testimonial_data: TestimonialData[] = [
  {
    name: `James Clayton`,
    description: `Light VPN gives me peace of mind, especially when I’m on public Wi-Fi. The auto-connect feature is amazing—I don’t have to worry about accidentally browsing unprotected..`,
  },
  {
    name: `Rachel L`,
    description: `One account for my Fire TV, tablet, and phone? Yes, please! Light VPN works seamlessly across all my Amazon devices, and I love that it’s optimized for my Fire Tablet..`,
  },
  {
    name: `Mark T`,
    description: `Light VPN gives me peace of mind, especially when I’m on public Wi-Fi. The auto-connect feature is amazing—I don’t have to worry about accidentally browsing unprotected..`,
  },
  {
    name: `Samantha`,
    description: `I’ve tried a few VPNs, but Light VPN stands out for streaming. I can watch Netflix, Hulu, and even region-locked YouTube content without any lag or buffering. The setup was super easy.`,
  },
  {
    name: `Carlos`,
    description: `I’ve never liked online ads, and with Light VPN’s built-in ad blocker, they’re finally gone! My browsing experience is much better, and I don’t need to worry about any extra ad-blocking apps..`,
  },
  {
    name: `ALI`,
    description: `One account for my Fire TV, tablet, and phone? Yes, please! Light VPN works seamlessly across all my Amazon devices, and I love that it’s optimized for my Fire Tablet.`,
  },
];

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <section className="testi_home_area section-padding">
        <div className="container">
          <div
            className="section-title text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span>Top Reviews</span>
            <h2>
              Take a look our top <br />
              Customer feedback
            </h2>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
                id="testimonial-slider"
                className="owl-carousel"
              >
                {testimonial_data.map((item, i) => (
                  <SwiperSlide
                    key={i}
                    className="testimonial"
                    data-aos="zoom-in"
                    data-aos-delay={100 + i * 100}
                    data-aos-duration="800"
                  >
                    <img src="assets/img/quote.png" alt="" />
                    <div className="testimonial_content">
                      <i className="ti-star"></i>{" "}
                      <i className="ti-star"></i>{" "}
                      <i className="ti-star"></i>{" "}
                      <i className="ti-star"></i>{" "}
                      <i className="ti-star"></i>{" "}
                      <p>{item.description}</p>
                    </div>
                    <div className="testi_pic_title">
                      <h4>{item.name}</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
