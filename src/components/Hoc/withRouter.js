import { useNavigate } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate}></Component>;
  };

  return Wrapper;
};
