import PublicGroupsPage from "./publicGroupsPage";
import publicGroupsData from "./PublicGroupsData";
import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
const PublicGroupFullPage = () => {
  return (
    <div>
      <Nav />
      <PublicGroupsPage groups={publicGroupsData} />
      <Footer />
    </div>
  );
};

export default PublicGroupFullPage;
