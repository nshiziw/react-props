
const ProfilePicture = ({ src, alt }) => {
    return (
        <img
        src={src}
        alt={alt}
        className="w-24 h-24 rounded-full border-4 border-teal-500"
        />
    );
};

export default ProfilePicture;
