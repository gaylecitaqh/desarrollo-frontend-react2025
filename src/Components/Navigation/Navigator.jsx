import React, { useState } from "react";
import { motion } from "motion/react"; 
import { useDispatch } from "react-redux";
import ModalLogout from "../Modals/ModalLogout.jsx";
import { resetForm } from "../../Store/features/form/formSlice"; // Acción para limpiar el store
import { Link } from "react-router";
import { useSelector } from "react-redux";


const Navigator = () => {
    const { username,email } = useSelector((state) => state.form.userInfo);
    console.log('datos ',  { username , email} ); 

    const dispatch = useDispatch();
    const [showLogoutModal, setShowLogoutModal] = useState(false); // Estado para controlar el modal

    const handleLogout = () => {
        dispatch(resetForm()); // Limpia el store
        setShowLogoutModal(false); // Cierra el modal
    };

    return (
        

        <nav className="navbar">        
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/counter" className="nav-link">Counter</Link>
                <Link to="/think" className="nav-link">Think</Link>
                <Link to="/product" className="nav-link">Product</Link>
                <Link to="/about" className="nav-link">About</Link>

                {username ? (
                    <p>Bienvenido, {username} | {email}!</p>
                ) : (
                    <p>Sin inicio de sesión</p>
                )}
   
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setShowLogoutModal(true)}
            >
                Logout
            </button>

            {/* Modal de Logout */}
           
                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} exit={{opacity: 0}} 
                transition={{duration: 0.5}} >

                    <ModalLogout 
                        visible={showLogoutModal}
                        message={`¿Está seguro?`}
                        onClose={() => setShowLogoutModal(false)}
                    />
                </motion.div> 
          
        </nav>
        
    );
};

export default Navigator;


/*
import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";


const Navigator = () => {
    const { username,email } = useSelector((state) => state.form.userInfo);
    console.log('datos ',  { username , email} ); 
     return (

        <nav className="navbar">
            
            
             <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>

            {username ? (
                <p>Bienvenido, {username} | {email}!</p>
            ) : (
                <p>Sin inicio de sesión</p>
            )}
        </nav>
    );
}

export default Navigator;
*/


