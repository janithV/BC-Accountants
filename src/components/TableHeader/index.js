import React from "react";

function TableHeader({ gif, alt, gifWidth, hText, hColor }) {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>
          <span>
            <img src={gif} alt={alt} width={gifWidth} height={gifWidth}></img>
          </span>{" "}
          {hText}
        </h1>
      </div>
    </>
  );
}

export default TableHeader;
