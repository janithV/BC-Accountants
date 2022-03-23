import {React} from "react"
import { Parallax } from "react-parallax";
import styles from "./style";

const Banner2 = ({image, header}) => {
    return( 
        <>
        <Parallax style={{}} bgImage={image} strength={'400'}>
            <div style={{height:300, backgroundColor: '#00000082'}}>
                <div style={styles.banner1} className="d-flex bd-highlight mb-3 example-parent">
                    <div style={styles.banner1Header}>{header}</div>
                </div>
            </div>
        </Parallax>
        {/* <div style={{height: '100vh'}}></div> */}
        </>
    );
}

export default Banner2;