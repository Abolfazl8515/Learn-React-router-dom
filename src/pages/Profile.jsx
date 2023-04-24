import SideBar from "../components/SideBar/SideBar";
import { Route } from "react-router-dom";
import DashBoard from "../components/DashBoard/DashBoard";
import Downloads from "../components/DownLoadsComp/Downloads";

const Profile = () => {
  return (
    <>
      <SideBar />
      <Route path="/profile/dashboard" component={DashBoard} />
      <Route path="/profile/downloads" component={Downloads} />
    </>
  );
};

export default Profile;
