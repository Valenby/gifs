import { GidItem } from "./GidItem";  // components
import { useFetchGifs } from "../hooks/useFetchGifs"; //hooks

//componente
export const GidGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
  
    return (
      <>
        <h3> {category} </h3>
        {
          isLoading && (<h2>Cargando...</h2>)
          
        }
        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GidItem 
                key={ image.id } //nuevo componet que se renderizara
                { ...image }
    
              />
            ))
          }
        </div>    

      </>
  )
}
