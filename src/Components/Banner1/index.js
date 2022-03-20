import React from "react"
import { Parallax } from "react-parallax";

const Banner1 = ({image, text, button}) => {
    return( 
        <Parallax style={{paddingTop:60}} bgImage={image}>
            <div style={{height:500,alignItems:"center"}} className="d-flex bd-highlight mb-3 example-parent">{text}
            <button className="align-self-center">{button}</button>
            </div>
        </Parallax>
    );
}

export default Banner1;