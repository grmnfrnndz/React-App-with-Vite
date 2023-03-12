import React, {useState} from 'react';

export const AddCategorie = ({onNewCategory}) => {
    const initialValue = '';
    const [inputValue, setInputValue, ] = useState(initialValue);

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length <= 3) return;
        // onAddCategorie(categories => [inputValue, ...categories, ]);
        onNewCategory(value);
        setInputValue(initialValue);
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type='text'
                    placeholder='Search Gifs'
                    value={inputValue}
                    onChange={ onInputChange }
                />
            </form>
        </>
    );
}
