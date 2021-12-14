import Layout from "../layout/Layout";
import styled from "@emotion/styled";
import { loginAction } from "../_redux/actions/authAction";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = ({ loginAction, auth }) => {
  if (auth.isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    const onClick = () => {
      loginAction();
    };
    return (
      <Container>
        <H3>Login to access</H3>
        <Button onClick={onClick}>Login</Button>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loginAction })(Login);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const H3 = styled.h3`
  color: #333;
`;

const Button = styled.button`
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
`;
