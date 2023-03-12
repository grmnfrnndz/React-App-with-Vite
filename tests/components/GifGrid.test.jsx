
import React from 'react';
import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";


jest.mock("../../src/hooks/useFetchGifs");



describe('test on GifGrid', function () {

    const category = 'Saitama';

    test('match snaspshot', () => {
        const {container} = render(<GifGrid category={category}/>);
        expect(container).toMatchSnapshot();
    });

    test('show loading', () => {
        UseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });


        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

        screen.debug();
    });

    test('show item when load imagen from UseFetchGifs', () => {
        render(<GifGrid category={category} />);
    });

});