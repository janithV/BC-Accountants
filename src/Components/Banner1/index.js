import {React} from "react"
import { Parallax } from "react-parallax";
import styles from "./style";
import { PrimaryButton as PrimaryButtonBase } from "../../Components/misc/Buttons.js";
import {Button} from 'react-bootstrap';

const Banner1 = ({image, header, button, description}) => {
    return( 
        <>
        <Parallax style={{paddingTop:56}} bgImage={image} strength={'400'}>
            <div style={{height:400, backgroundColor: '#00000082'}}>
                <div style={styles.banner1} className="d-flex bd-highlight mb-3 example-parent">
                    <div style={styles.banner1Header}>{header}</div>
                    <div style={styles.bottomHeader}>
                        <div style={styles.banner1Description}>{description}</div>
                        <Button style={styles.headerButton} variant="info" size="lg">{button}</Button>
                    </div>
                </div>
            </div>
        </Parallax>
        {/* <div style={{height: '100vh'}}></div> */}
        </>
    );
}

export default Banner1;