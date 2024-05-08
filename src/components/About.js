import Profile from "./ProfileClass";

const About = () => {
  return (
    <div className="mb-[500px]">
      <h1>About us page</h1>
      <h2>
        This app is build using react during the namaste react live course.
      </h2>
      <Profile name={"Saiganesh Sristla"} />
    </div>
  );
};

export default About;
