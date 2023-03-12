import React, {useEffect, useState} from 'react';
import {getGifs} from "../helpers/getGifs.js";

export const UseFetchGifs = (category) => {

    const initialImages = [];
    const [images, setImages] = useState(initialImages);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // getImages();

        // getGifs(category).then(setImages);
        getGifs(category).then((imgs) => {
            setImages(imgs);
            setIsLoading(false);
        });

    },[]);

    return {
        images: images,
        isLoading: isLoading,
    }
}