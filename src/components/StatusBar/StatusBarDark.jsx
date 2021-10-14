import "./style.css";
import Left from "./left-dark.svg";
import Right from "./right-dark.svg";

const StatusBarDark = () => {
  return (
    <div className="title">
      <img src={Left} alt="status-left" className="icon" />
      <img src={Right} alt="status-right" className="icon" />
    </div>
  );
};

export default StatusBarDark;
