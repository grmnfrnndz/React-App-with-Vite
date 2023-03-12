import React, {useState} from 'react';
import {AddCategorie, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories, ] = useState(['OnePunch']);

    const onAddCategorie = (value) => {
        // do not try this
        // categories.push(value);

        if (categories.includes(value)) return;

        setCategories([value, ...categories]);
        // setCategories(categoriesX => [value, ...categoriesX, ]);
    }

    return (
        <>
            {/*title*/}
            <h1>GifExpertApp</h1>

            {/* inputs */}
            <AddCategorie
                // onAddCategorie={setCategories}
                onNewCategory={onAddCategorie}
            />

            {/* list of gif */}
            {categories.map(category =>
                (
                    <GifGrid key={category} category={category}/>
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li >{category}</li>
                    // </div>
                )
            )}

            {/* gif items */}
        </>
    );
}