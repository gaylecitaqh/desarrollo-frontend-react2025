import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ModalLogout from "../Modals/ModalLogout.jsx";
import { resetForm } from "../../Store/features/form/formSlice"; // Acción para limpiar el store
import { Link } from "react-router";
import { useSelector } from "react-redux";


const Navigator = () => {
    const { username,email } = useSelector((state) => state.form.userInfo);
    
    const dispatch = useDispatch();
    const [showModalLogout, setShowModalLogout] = useState(false); // Estado para controlar el modal

    const handleLogout = () => {
        console.log('datosAntes ',  { username , email} ); 

        dispatch(resetForm("logout")); // Limpia el store        
        setShowModalLogout(false);
        window.location.reload(); // NO recomendado, pero efectivo
    };

    return (
        

        <nav className="navbar">        
                <Link to="/" className="nav-link">Home</Link>
                
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/counter" className="nav-link">Counter</Link>
                <Link to="/think" className="nav-link">Think</Link>
                <Link to="/product" className="nav-link">Product</Link>
                <Link to="/about" className="nav-link">About</Link>
                <span className="nav-user"> {username ? (Bienvenido/a ,{username}||{email} 
                ) : (
                   ""
                )}
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
