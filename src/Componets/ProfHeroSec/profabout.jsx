import { aboutData } from "./herodata";

function profAboutCard() {
  return (
    <div className="container my-4 about-prof">
      <div className="row justify-content-end">
        <div className="col-12 col-lg-6 about-card-prof">
          {aboutData.map((item, index) => (
            <div key={index} className="mb-4 p-4 ">
              <h3 className="mb-3">About {item.name}</h3>
              <p>{item.description}</p>

              <table className="prof-table table-borderless mt-3">
                <tbody>
                  <tr>
                    <td>Background & Experience</td>
                    <th className="px-5">{item.background}</th>
                  </tr>
                  <tr>
                    <td>Specialization</td>
                    <th className="px-5">{item.specialization}</th>
                  </tr>
                  <tr>
                    <td>Language Skills</td>
                    <th className="px-5">{item.languages}</th>
                  </tr>
                  <tr>
                    <td>Tour Style</td>
                    <th className="px-5">{item.style}</th>
                  </tr>
                  <tr>
                    <td>Personal Interests</td>
                    <th className="px-5">{item.interests}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default profAboutCard;
