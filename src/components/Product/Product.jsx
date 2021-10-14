import photo from "./image-5.svg";
import "./style.css";

const Product = () => {
  return (
    <div className="container">
      <div className="wrapper" style={{ margin: "20px", marginBottom: 0 }}>
        <div>
          <img src={photo} alt="product" />
        </div>
      </div>
      <div
        className="wrapper-2"
        style={{
          marginBottom: "15px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <div>
          <div className="product-name">TMA-2 HD Wireless</div>
          <div className="price">USD 350</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
