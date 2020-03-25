import { useState } from 'react'

function useZipCode() {
    const [value, setValue] = useState('');    
    const getZip = async() => {
        try {
            const response = await fetch(`http://viacep.com.br/ws/${value}/json/`, {mode: 'cors'});
            if (response.ok){
                return await response.json();
            } else {
                return response.status;
            }
        } catch (error) {
             throw error;   
        }        
        return false;
    }; 
    return [value, setValue, getZip];
};

export default useZipCode;