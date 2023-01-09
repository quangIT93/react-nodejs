import { Navigate } from "react-router-dom";

const Landing = () => {
  return <Navigate to="/login" replace={true} />;
};

export default Landing;
