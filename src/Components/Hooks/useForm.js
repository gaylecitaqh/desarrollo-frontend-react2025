import { useState  } from "react"; 
//import { useDispatch } from "react-redux";

const useForm = (initialState ={}) => { 
    const [formData, setFormData] = useState({ ...initialState });
   // const dispatch = useDispatch();

    /*useEffect(() => {
        setFormData({ ...initialState });
    }, [initialState]);
*/
    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value, 
        }); 
        
    }; 
    
    const resetForm = () => {
        setFormData({ ...initialState });
    };



   
        
    return { formData, handleChange,resetForm}; //,setFormData };
}; 
    export default useForm;


