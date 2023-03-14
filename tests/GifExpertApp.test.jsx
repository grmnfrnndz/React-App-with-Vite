import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp.jsx";


describe('test on GifExpertApp', function () {

    const valueInput = 'Saitama';

    test('match on snapshot', () => {
       const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    });

    test('input add value - submit empty input', () => {

        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: valueInput}});
        expect(input.value).toBe(valueInput);
        fireEvent.submit(form);
        expect(input.value).toBe('');

    });

    test('input add value - submit empty input', () => {

        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: valueInput}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(screen.getByText(valueInput)).toBeTruthy()


        screen.debug();

    });



});

