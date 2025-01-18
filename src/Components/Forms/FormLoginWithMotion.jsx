import { useState } from "react";
import { motion } from "motion/react";
import { useSelector } from 'react-redux';
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../Modals/ModalInfo.jsx";
//import ModalVerification from "../Modals/ModalVerification.jsx";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
    const moduleName = useSelector(state => state.form.dataForm[0].module);
    const passCod = useSelector(state => state.form.dataForm[0].password);
    
    const {formData, handleChange} = useForm({

        module:moduleName,
        username: '',
        email: '',
        password:passCod
    });
    const [showModal, setShowModal] = useState(false); //variaciòn modal
    //const [showModalVerification, setShowModalVerification] = useState(false); // Para el modal de verificación
    //const [isSubmitted, setIsSubmitted] = useState(false); // controlar envío
    
    const handleSubmit = (e) => {
        e.preventDefault();
       // setIsSubmitted(true); // marca como enviado
        //if (!moduleName|| !formData.username || !formData.email || !passCod) {
        //    setShowModalVerification(true); // muestra error cuando un campo no tiene datos
        //    return;
        //}
     

        setShowModal(true);
        console.log('datos del formulario', formData);
    };



    const onCloseModalInfo = () => {
        setShowModal(false);
    };

   /* const onCloseModalVerification = () => {
        setShowModalVerification(false);
    };*/

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <ModalInfo
                visible={showModal}
                message="Formulario enviado!!!"
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{x: -100}}
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
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={moduleName}//{formData.module}
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
                            <input
                                type="text"
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
                                type="password"
                                name="password"
                                value={passCod}//{formData.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{y: 100}}
                    animate={{y: 0}}
                    transition={{duration: 0.5}}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
       
        </motion.div>
    );
};
export default FormWithMotionAndHook;