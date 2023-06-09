import React from 'react';

import {GifGridItem} from "./GifGridItem.jsx";
import {UseFetchGifs} from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";


export const GifGrid = ({category}) => {
    const {images, isLoading} = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading ? (<h2>Cargando...</h2>) : null
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((img) => {
                        return (
                            <GifGridItem
                                key={img.id}
                                // title={title}
                                // url={url}
                                {...img}
                            />
                        );
                    })
                }
            </div>
        </>
    );

}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
