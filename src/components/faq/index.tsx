import { useEffect } from "react";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import FaqArea from "./FaqArea";
import ScrollTop from "../common/ScrollTop";
 

const Faq = () => {

  useEffect(() => {
		if (typeof window !== 'undefined') {
			import('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	}, []);



  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Faq" subtitle="Faq" />
      <FaqArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Faq;