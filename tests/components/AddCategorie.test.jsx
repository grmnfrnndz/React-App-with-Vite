import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";

import {AddCategorie} from "../../src/components/index.js";


describe('test on AddCategorie', function () {

    const valueInput = 'Saitama';


    test('match snaspshot', () => {
        const {container} = render(<AddCategorie onNewCategory={() => {}}/>);
        expect(container).toMatchSnapshot();
    });

    test('change text input', () => {
        render(<AddCategorie onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: valueInput}});
        expect(input.value).toBe(valueInput);

        // screen.debug();
    });

    test('call to onNewCategory when input contain value', () => {

        const onNewCategory = jest.fn();

        render(<AddCategorie onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // change value in input
        fireEvent.input(input, {target: {value: valueInput}});
        // call submit
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(valueInput);

        // screen.debug();
    });

    test('dont call onNewCategory when input empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategorie onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // change value in input
        fireEvent.input(input, {target: {value: 'nc'}});
        // call submit
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });


});