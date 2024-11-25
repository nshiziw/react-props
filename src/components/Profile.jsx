import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileBio from "./ProfileBio";

const Profile = ({ name, picture, bio }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg max-w-xs mx-auto text-center">
      <ProfilePicture src={picture} alt={name} />
      <ProfileName name={name} />
      <ProfileBio bio={bio} />
    </div>
  );
};

export default Profile;
