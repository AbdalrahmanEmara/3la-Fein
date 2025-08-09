import ProfileCard from './profcard'
import { ProfilecardData } from"../herodata"

function ProfileCardMap() {
  return (
    <div className="container prof-card-map">
      <div className="row ">
        {ProfilecardData.map((profile) => (
          <div key={profile.id} className="col-12 col-md-4 col-sm-6">
            <ProfileCard
              image={profile.image}
              name={profile.name}
              description={profile.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCardMap;