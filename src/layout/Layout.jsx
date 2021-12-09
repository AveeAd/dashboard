import classes from "../scss/Layout.module.scss";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
