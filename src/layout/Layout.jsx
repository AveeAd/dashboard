import styled from "@emotion/styled";
import classes from "../scss/Layout.module.scss";
import { logoutAction } from "../_redux/actions/authAction";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Layout = ({ children, logoutAction, auth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    logoutAction();
    if (!auth.isAuthenticated) {
      navigate("/login");
    }
  };
  return (
    <div className={classes.container}>
      <Sidebar />
      {children}
      <Logout onClick={onClick}>Logout</Logout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutAction })(Layout);

const Logout = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: red;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;
