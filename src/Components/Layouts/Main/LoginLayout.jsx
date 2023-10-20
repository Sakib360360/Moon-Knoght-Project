import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/Navbar";
import Footer from "../../page/Shared/Footer/Footer";


const LoginLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
  <Footer></Footer> 
    </div>
  );
};

export default LoginLayout;
