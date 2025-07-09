import { Link } from "react-router-dom";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";


const NotFound = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="404" subtitle="404" />
      <section className="zero_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="error_page">
                <img src="assets/img/404.svg" className="img-fluid" alt="404 error" />
                <h2>Oops! Page not found</h2>
                <p>Hmm. We're having trouble finding that site. Try again later or Check your network connection.</p>
                <div className="home_btn">
                  <Link to="/" className="btn_one">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
      <ScrollTop />

    </>
  );
};

export default NotFound;