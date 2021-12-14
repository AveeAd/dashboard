import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  if (auth.isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
