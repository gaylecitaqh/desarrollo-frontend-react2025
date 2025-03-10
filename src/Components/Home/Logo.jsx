// Estructura de react
import viteLogo from '../../assets/vite.svg';
import reactLogo from "../../assets/react.svg";

const Logo =() =>{

    return(//html siempre retorna
    <div>
       
                <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
       
    </div> 
    );
};

export default Logo;