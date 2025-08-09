import GroupMember from "../../Componets/Groups/GroupMember";
import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";

const GroupDetailsPage = () => {
  return (
    <div>
      <Nav />
      <main style={{ paddingTop: "100px" }}>
        <GroupMember />
      </main>
      <Footer />
    </div>
  );
};

export default GroupDetailsPage;
