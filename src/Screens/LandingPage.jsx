import { useState } from "react";

import Body from "../Components/LandingPage/Body.jsx"
import Footer from "../Components/LandingPage/Footer.jsx"

const LandingPage =() => {
    //const [nameComponnet,setNameComponent] = useState('LandingPage');

    return(
        <>
            <div>
                <title>Módulo 7: Desarrollo Frontend con ReactJS</title>
            </div>
            <div>
                <div className="container">
                    <Body></Body>
                    <Footer></Footer> 
                </div>
            </div>
        </>
    );
};

export default LandingPage;