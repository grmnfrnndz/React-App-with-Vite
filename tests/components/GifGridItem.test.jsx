import React from 'react';
import {render, screen} from "@testing-library/react";
import {GifGridItem} from "../../src/components/index.js";


describe('GifGridItem', function () {
    const image = {
        id: 1,
        title: 'onepunch',
        url: 'https://media3.giphy.com/media/YJDmc88k7ttao/giphy.gif?cid=3e9512a86cj6lnl8snfj85eejeconk2yokdtueu3gqf2rbhz&rid=giphy.gif&ct=g'
    }

    test('match snapshot', () => {
        const {container} = render(<GifGridItem {...image} />);
        expect(container).toMatchSnapshot();
    });

    test('test img src alt', () => {
        render(<GifGridItem {...image} />);

        // expect(screen.getByRole('img').src).toBe(image.url);
        // expect(screen.getByRole('img').alt).toBe(image.title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(image.url);
        expect(alt).toBe(image.title);
    });

    test('test title by text', () => {
        const {getByText, getByTestId} = render(<GifGridItem {...image}/>);

        expect(getByText(image.title)).toBeTruthy()
        expect(getByTestId('titleitem').innerHTML).toBe(image.title);
        expect(getByTestId('titleitem').innerHTML).toContain(image.title);
    });
});