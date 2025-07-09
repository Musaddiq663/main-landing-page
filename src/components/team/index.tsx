import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import TeamArea from "./TeamArea";

 


const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Team" subtitle="Team" />
      <TeamArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Team;