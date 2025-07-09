import { Link } from "react-router-dom";

const ServiceArea = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            {[
              {
                img: "assets/img/service1.png",
                title: "Malware Protection",
                text: "Our VPN shields you from harmful malware and unsafe websites. It blocks malicious downloads and keeps your device secure. Stay protected while browsing online.",
              },
              {
                img: "assets/img/service2.png",
                title: "Server Protection",
                text: "Our VPN uses secure and encrypted servers to keep your data safe. It protects against unauthorized access and cyber threats. Enjoy a fast and secure connection every time.",
              },
              {
                img: "assets/img/service3.png",
                title: "Computer Security",
                text: "Our VPN adds an extra layer of protection to your computer. It keeps hackers and trackers away from your system. Browse, stream, and work safely without worry.",
              },
              {
                img: "assets/img/service8.png",
                title: "Quick Connect",
                text: "One-tap connection for instant protection on Fire devices.",
              },
              {
                img: "assets/img/service9.png",
                title: "HD Streaming",
                text: "Buffer-free, high-resolution streaming on Fire TV.",
              },
              {
                img: "assets/img/service10.png",
                title: "Fast Server Switch",
                text: "Change servers with one click for uninterrupted streaming.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-sm-4 col-xs-12"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                data-aos-duration="800"
              >
                <div className="single_service">
                  <img src={service.img} className="img-fluid" alt="image" />
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <Link to="/service-details">
                    Read More <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
