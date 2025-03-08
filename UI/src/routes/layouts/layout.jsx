import "./layout.scss";
import Navbar from "../../components/navbar/navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  // useEffect(()=>{
  //   if(!currentUser){
  //     <Navigate to={"/login"} />
  //   }
  // },[currentUser])

  if (!currentUser) return <Navigate to="/login" />;
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { RequireAuth, Layout };
