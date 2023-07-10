// cada componente puede tener su estado y sus hookcs
import { useState } from "react";  
//COMPONENT INPUT
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ( event )=>{ 
        setinputValue( event.target.value ); //PARA QUE CAMBIE EL ESTADO
    }

    const onSubmit = ( event )=>{
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return; 
        setinputValue('');
        onNewCategory( inputValue.trim() );
    }

  return (
    <form  className="container" onSubmit={ onSubmit }>
        <input
        className="input"
            type="text"
            placeholder="Search"
            value={ inputValue }   
            onChange={  onInputChange } 
        />
    </form>
    

    
    
    
    
  )
}
