import Button from "./components/Button";
import Profile from "./components/Profile";

const App = () => {
  const handleLogIn = () => alert("Logged In successfully!");
  const handleRegister = () => alert("Account created!");

  // question 2
  const user = {
    name: "John Doe",
    picture: "https://images.pexels.com/photos/899954/pexels-photo-899954.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "A passionate software developer who loves coding and coffee.",
  };

  const handleProfileClick = () => alert("Profile button clicked!");

  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-10">
        <Button text="Log In" onClick={handleLogIn} />
        <Button text="Create Account" onClick={handleRegister} />
      </div>
      <div className="flex flex-col items-center gap-4 mt-10">
        <Profile name={user.name} picture={user.picture} bio={user.bio} />
        <Button text="Edit Profile" onClick={handleProfileClick} />
      </div>
    </>
  );
};

export default App;
