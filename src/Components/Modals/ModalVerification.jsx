import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types

const ModalVerification = ({ dmodule,dname ,demail,dpassword,errormessage, onClose, visible }) => {
    console.log("errormessage="+ errormessage);
    
    const casosError = !dmodule || !dname || !demail || !dpassword ;
    
    if (!visible) {
        return null; // No renderiza nada si no es visible
    }

return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                {casosError && (  <div>
                    <p>{errormessage}</p>
                </div>)}
               
                <button
                    className="close-btn-success"
                    onClick={onClose}
                >
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalVerification;