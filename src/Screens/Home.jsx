import Logo from "../Components/Home/Logo.jsx"
import Body from "../Components/Home/Body.jsx"
import Footer from "../Components/Home/Footer.jsx"
import Github from "../Components/Home/Github.jsx";

const Home = () =>{
    return(
        <div>
            <Logo></Logo> 
            <Github></Github>
            <Body></Body> 
            <Footer></Footer> 
        </div>
    );
};

export default Home;