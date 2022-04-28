import { React } from "react";
import { Parallax } from "react-parallax";
import styles from "./style";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);

const Banner2 = ({ image, header, lordicon, fColor }) => {
  return (
    <>
      {/* <Parallax style={{}} bgImage={image} bgImageStyle={{height: '450px', textAlign:'left'}} strength={0}>
                
            </Parallax> */}
      <div
        style={{ display: "flex", alignItems: "center", padding: "0 30px" }}
        className="col-12 d-flex bd-highlight mb-5 example-parent mt-5"
      >
        <div className="col-6">
          <img src={image} height="500" style={{ marginLeft: "80px" }} />
        </div>
        <div
          className="col-6"
          style={{
            fontSize: "120px", //fontStyle: 'italic',
            fontWeight: "450",
            color: fColor,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {header} <img src={lordicon} height="200px" />
        </div>
      </div>
    </>
  );
};

export default Banner2;
