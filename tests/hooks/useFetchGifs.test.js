import {UseFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe('test on UseFetchGifs', function () {


    test('return initial state', () => {

        const {result} = renderHook(() => UseFetchGifs('Saitama'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


        // const {images, isLoading} = UseFetchGifs();

    });


    test('return array images and isLoading in false', async () => {
        const {result} = renderHook(() => UseFetchGifs('Saitama'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 2000
            }
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    });



});

