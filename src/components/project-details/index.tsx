import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import ProjectDetailsArea from "./ProjectDetailsArea";

 

const ProjectDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Project Details" subtitle="Project Details" />
      <ProjectDetailsArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default ProjectDetails;