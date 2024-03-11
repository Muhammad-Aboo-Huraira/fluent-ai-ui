import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/Sidebar/Sidebar";
import { React } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="layout">
      {<SideBar data={children} />}
      
    </div>
  );
};
export default Layout;