import logo from "./logo.svg";
import "./style.css";

const Logo = ({ logoImage }) => {
  return (
    <div>
      <img src={(logoImage = logo)} alt="logo" className="logo" />
    </div>
  );
};

export default Logo;
