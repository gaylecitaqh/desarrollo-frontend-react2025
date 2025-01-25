import { motion } from "motion/react"

const ModalLogout = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-96">
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={onClose}
            >
                ✕
            </button>
            <div>{children}</div>
        </div>
        </div>
    );
};

export default ModalLogout;