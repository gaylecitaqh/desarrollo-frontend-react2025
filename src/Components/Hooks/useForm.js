//import { useState, useEffect  } from "react"; 
import { useState  } from "react"; 

const useForm = (initialState,onFieldChange) => { 
    const [formData, setFormData] = useState(initialState); 

    // Actualiza el estado interno si el estado inicial cambia
 /*   useEffect(() => {
        setFormData(initialState);
    }, [initialState]);
*/

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value, 
        }); 
        if (onFieldChange) { 
            onFieldChange(name, value); 
        } 
    }; 
    
   
        
    return { formData, handleChange }; }; 
    export default useForm;
