 
import ScrollToTop from "../components/common/ScrollToTop";

 
const Wrapper = ({ children }: any) => {
  return (
    <>
      <ScrollToTop />
      {children} 

    </>
  );
};

export default Wrapper;