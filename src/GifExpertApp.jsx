import { useState } from "react";
import { AddCategory, GidGrid } from "./components";

//COMPONENT PRINCIPAL
export const GifExpertApp = () => {
                
    const [ categories, setCategories ] = useState(['anya'])

    const onAddCategory = ( newCategory) =>{

        if ( categories.includes ( newCategory ) ) return;  
    
        setCategories([ newCategory, ...categories ]);
    }

return (

  <>
  
  <h2> Valenby</h2>
  <h1>Search gif</h1>
  {/* input */}
  <AddCategory 
      onNewCategory={onAddCategory} //MANDAMOS REFERENCIA A LA FUNCION ONNEWCATEGORY
  />  
  {/* lista, map.. esto nos renderiza la busqueda del input */}
  {
  categories.map( ( category ) => (
      <GidGrid 
      key={category}  
      category={category} />
      ))
              
  }
  
    

  </>
)
}
