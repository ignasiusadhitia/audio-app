import "./style.css";
import Left from "./left-light.svg";
import Right from "./right-light.svg";

const StatusBarLight = () => {
  return (
    <div className="title">
      <img src={Left} alt="status-left" className="icon" />
      <img src={Right} alt="status-right" className="icon" />
    </div>
  );
};

export default StatusBarLight;
