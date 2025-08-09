import PublicGroupsPage from "./publicGroupsPage";
import publicGroupsData from "./PublicGroupsData";
import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import { useEffect } from "react";

const PublicGroupFullPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav />
      <PublicGroupsPage groups={publicGroupsData} />
      <Footer />
    </div>
  );
};

export default PublicGroupFullPage;
