import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [])


    // useEffect(() => {
    //     getGifs(category)
    //         .then(newImages => setImages(newImages));
    //     setIsLoading(false);
    // }, [])

    return {
        images,
        isLoading
    }
}