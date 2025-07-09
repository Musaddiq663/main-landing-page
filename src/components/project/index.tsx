import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import ProjectArea from "./ProjectArea";



const Project = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Project" subtitle="Project" />
      <ProjectArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Project;