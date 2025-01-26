import { Link } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ModalLogout from "../Modals/ModalLogout.jsx"
import { resetForm} from "../../Store/features/form/formSlice.js";

const Navigator =  ()  => {
    const { userInfo } = useSelector((state) => state.form);
    console.log('Datos antes 2: ', userInfo);
    const dispatch = useDispatch();
    const [showModalLogout, setShowModalLogout] = useState(false); // Estado para controlar el modal

    const handleLogout = () => {
        console.log('Datos antes de logout: ', userInfo);
        dispatch(resetForm("logout")); // Limpia el store        
        setShowModalLogout(false);
        window.location.reload(); // NO recomendado, pero efectivo
          // Limpia los campos visualmente
       
    };

    return (
        <nav className="navbar">        
                <Link to="/" className="nav-link">Home</Link>
                
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/counter" className="nav-link">Counter</Link>
                <Link to="/think" className="nav-link">Think</Link>
                <Link to="/product" className="nav-link">Product</Link>
                <Link to="/about" className="nav-link">About</Link>
                <span className="nav-username">Bienvenido/a {userInfo.username || "Invitado"} ({userInfo.email || "Sin correo"})

               
            <button className="btnlogout"  type="button" 
                onClick={() => setShowModalLogout(true)} >
                    Logout
            </button> </span>
                <ModalLogout 
                
                    visible={showModalLogout}
                    onClose={() => setShowModalLogout(false)}
                    onLogout={handleLogout}
                />
        </nav>
    );
};

export default Navigator;
