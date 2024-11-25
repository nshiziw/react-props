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
    <div className="flex flex-col items-center">
      <h1 className="uppercase font-bold text-2xl mt-4 text-teal-800">Question One</h1>
      <div className="flex justify-center items-center gap-4">
        <Button text="Log In" onClick={handleLogIn} />
        <Button text="Create Account" onClick={handleRegister} />
      </div>
      <h1 className="uppercase font-bold text-2xl mt-4 text-teal-800">Question Two</h1>
      <div className="flex flex-col items-center gap-4">
        <Profile name={user.name} picture={user.picture} bio={user.bio} />
        <Button text="Edit Profile" onClick={handleProfileClick} />
      </div>
    </div>
  );
};

export default App;
