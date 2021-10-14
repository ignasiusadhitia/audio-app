import "./style.css";
import Arrow from "./arrow-right.svg";
import Image from "./image-5.svg";

const Banner = ({ text, productImage }) => {
  return (
    <div className="banner">
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            className="title"
            style={{
              fontFamily: "Montserrat",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: "700px",
              padding: 0,
              marginTop: "20px",
              width: "80%",
            }}
          >
            {text}
          </div>
          <div className="wrapper-3">
            <div className="text">Shop now</div>
            <img src={Arrow} alt="arrow-right" />
          </div>
        </div>
        <div>
          <img src={(productImage = Image)} alt="product" className="product" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
