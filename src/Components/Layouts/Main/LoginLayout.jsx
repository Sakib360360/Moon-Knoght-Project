import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/Navbar";


const LoginLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
    {/*   <Footer></Footer> */}
    </div>
  );
};

export default LoginLayout;
