import Product from "../../components/Product/Product";
import StatusBarDark from "../../components/StatusBar/StatusBarDark";
import TitleBar from "../../components/TitleBar/TitleBar";
import BadgeTrue from "../../components/Badge/BadgeTrue";
import BadgeFalse from "../../components/Badge/BadgeFalse";
import Banner from "../../components/Banner/Banner";
import "./style.css";

const Home = () => {
  return (
    <div>
      <StatusBarDark />
      <TitleBar />
      <div
        style={{
          margin: "24px",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#000000",
        }}
      >
        Hi, Andrea
      </div>
      <div
        style={{
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "32px",
          margin: "24px",
          color: "#000000",
        }}
      >
        What are you looking for today?
      </div>
      <div style={{ margin: "24px" }}>
        <input
          type="text"
          placeholder="Search headphone"
          className="search-box"
        />
      </div>
      <div className="container-2">
        <div className="badge">
          <BadgeTrue text="Headphone" />
          <BadgeFalse text="Headband" />
          <BadgeFalse text="Earpads" />
        </div>
        <div style={{ margin: "17px" }}>
          <Banner text="TMA-2 Modular Headphone" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              margin: "24px",
              fontFamily: "DM Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "20px",
              color: "#000000",
            }}
          >
            Featured Products
          </div>
          <div
            style={{
              margin: "24px",
              fontFamily: "DM Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#7F7F7F",
            }}
          >
            See All
          </div>
        </div>
        <div style={{ display: "flex", margin: "17px" }}>
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
