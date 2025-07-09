import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import BlogDetailsArea from "./BlogDetailsArea";


 

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default BlogDetails;