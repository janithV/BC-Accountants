import { Background } from "react-parallax";

const styles = ({
    banner1: {
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center',
        
    },
    banner1Header: {
        fontSize: '40px',
        fontWeight:'700',
    },
    banner1Description: {
        marginBottom: 20,
        fontSize: '26px',
    },
    bottomHeader:{
        marginTop:30,
    },
    headerButton:{
        borderRadius:40,
        fontSize:16,
        padding:'10px 30px',
        fontWeight:'500',
        color: 'white',
        Background: '#6c63ff'
    },
});

export default styles;