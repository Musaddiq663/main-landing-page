import { Link } from "react-router-dom";

 

const BlogArea = () => {
  return (
    <>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src="assets/img/blog/1.jpg" className="img-fluid" alt="image" />
                  <span><Link to="/blog-details">Security</Link></span>
                  <span>February 15, 2024</span>
                  <h3><a href="#">How can you improvement to your business policy for the better product.</a></h3>
                  <a href="#" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src="assets/img/blog/2.jpg" className="img-fluid" alt="image" />
                  <span><Link to="/blog-details">Security</Link></span>
                  <span>February 15, 2024</span>
                  <h3><a href="#">people poputation change anything what your need for your next generation.</a></h3>
                  <a href="#" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src="assets/img/blog/3.jpg" className="img-fluid" alt="image" />
                  <span><Link to="/blog-details">Security</Link></span>
                  <span>February 15, 2024</span>
                  <h3><a href="#">Improve your business so that you can stay in your local business in next month.</a></h3>
                  <a href="#" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src="assets/img/blog/4.jpg" className="img-fluid" alt="image" />
                  <span><Link to="/blog-details">Security</Link></span>
                  <span>February 15, 2024</span>
                  <h3><a href="#">A significant shift in mindset is required to support either type of side project.</a></h3>
                  <a href="#" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src="assets/img/blog/5.jpg" className="img-fluid" alt="image" />
                  <span><Link to="/blog-details">Security</Link></span>
                  <span>February 15, 2024</span>
                  <h3><a href="#">Population change anything what your need for your next generation.</a></h3>
                  <a href="#" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src="assets/img/blog/6.jpg" className="img-fluid" alt="image" />
                  <span><Link to="/blog-details">Security</Link></span>
                  <span>February 15, 2024</span>
                  <h3><a href="#">How to Improve your business so that you can stay in your local business.</a></h3>
                  <a href="#" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;