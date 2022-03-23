import React from "react"
import { Parallax } from "react-parallax";
import styles from "./style";

const Banner1 = ({image, text, button}) => {
    return( 
        <Parallax style={{paddingTop:60}} bgImage={image}>
            <div style={{height:500}}>
                <div style={styles.banner1} className="d-flex bd-highlight mb-3 example-parent">
                    <div>{text} {"\n"}</div>
                  <div><button className="align-self-center">{button}</button></div>
                </div>
            </div>
        </Parallax>
    );
}

export default Banner1;