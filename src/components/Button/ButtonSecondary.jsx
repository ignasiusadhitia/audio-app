import "./style.css";
import Next from "./chevron-right.svg";

const ButtonSecondary = ({ text, icon }) => {
  return (
    <div className="button secondary">
      {text}
      <img src={(icon = Next)} alt="next" />
    </div>
  );
};

export default ButtonSecondary;
