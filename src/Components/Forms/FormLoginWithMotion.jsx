import { useState } from "react"; 
import { motion } from "motion/react"; 
import { useSelector,useDispatch } from 'react-redux';
import ModalInfo from "../Modals/ModalInfo.jsx"; 
import ModalVerification from "../Modals/ModalVerification.jsx";
import { resetForm } from '../../Store/features/form/formSlice.js'; 
import useForm from "../Hooks/useForm.js"; 


const FormWithMotionAndHook = ({titleForm}) => { 
    const dispatch = useDispatch();
    const moduleName = useSelector(state => state.form.dataForm[0].module); 
    const passCod = useSelector(state => state.form.dataForm[0].password); 
    const [showModal, setShowModal] = useState(false); 
    const [showModalVerification, setShowModalVerification] = useState(false); // Control del modal de advertencia
    const [showPassword, setShowPassword] = useState(false); // Nuevo estado para controlar la visibilidad de la contraseña

    const {formData, handleChange} = useForm(
        { 
        module:moduleName || '', 
        username: '',
        email: '',
        password:passCod || '', 
       
        
    } ); 
    
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (formData.password !== passCod) {
            setShowModalVerification(true); 
            return; 
        }
        setShowModal(true); 
        console.log('datos del formulario', formData); 
    }; 
    const onCloseModalInfo = () => { 
        setShowModal(false); 
    }; 

    const onCloseModalVerification = () => {
        setShowModalVerification(false);
    };

    const handleReset = () => {
        dispatch(resetForm());    
    };

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    
    return ( 
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1}} exit={{opacity: 0}} 
    transition={{duration: 0.5}} >
        
         <ModalInfo 
         visible={showModal} 
         message={`Bienvenido!!!  ${formData.username}`}
         onClose={onCloseModalInfo} 
         /> 
         
         <ModalVerification
                visible={showModalVerification}
                errormessage="Username/Password incorrectos!!!"
                onClose={onCloseModalVerification}
        />

         <form onSubmit={handleSubmit}> 
            <motion.div initial={{x: -100}} 
            animate={{x: 0}} 
            transition={{duration: 0.5}} 
            > 
            <h3>{titleForm}</h3> 
            </motion.div> 
            
            <motion.div 
            initial={{x: -100}} 
            animate={{x: 0}} 
            transition={{duration: 0.5}}
            > 
            <div> 
                <label> Module:
                     <input type="text" 
                     name="module" 
                     value={formData.module}
                     onChange={handleChange} 
                     required 
                     /> 
                </label> 
            </div> 
            </motion.div> 
            
            <motion.div 
            initial={{x: -100}}
             animate={{x: 0}} 
             transition={{duration: 0.5}} 
             > 
             <div> 
                <label> 
                    Username: 
                    <input type="text"
                    name="username" 
                    value={formData.username}
                    onChange={handleChange} 
                    required 
                    /> 
                </label> 
            </div> 
            </motion.div> 
            
            <motion.div 
            initial={{x: -100}} 
            animate={{x: 0}} 
            transition={{duration: 0.5}} 
            > 
            <div> 
                <label> 
                    Email: 
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                    /> 
                </label>
            </div> 
            </motion.div> 
            
            <motion.div 
            initial={{x: -100}} 
            animate={{x: 0}} 
            transition={{duration: 0.5}} 
            > 
            <div> 
                <label> 
                    Password:
                     <input 
                     type={showPassword ? "text" : "password"} // Cambia el tipo de input //type="password" 
                     name="password" 
                     value={formData.password}
                     onChange={handleChange} 
                     required 
                     /> 
                </label> 
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    style={{ marginLeft: '10px' }} // Opcional, para espaciar el botón
                >
                    {showPassword ? "Ocultar" : "Ver"}
                </button>

            </div> 
            </motion.div> 
            
            <motion.div 
            initial={{y: 100}} 
            animate={{y: 0}} 
            transition={{duration: 0.5}} 
            > 
            
            <button type="submit">Enviar</button> 
            <button type="button" onClick={handleReset}>Reset</button>

            </motion.div> 
        </form> 
        </motion.div> 
        ); 
    }; 
    
    export default FormWithMotionAndHook;