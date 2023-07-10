import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook es simplemente una funcion
export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    
    const getImages = async()=>{
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
      getImages();
    }, [])
    
    
    
    return {
        images,
        isLoading
    }
}
