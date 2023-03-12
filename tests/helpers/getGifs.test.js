import {getGifs} from "../../src/helpers/getGifs.js";

describe('test on getGifs.js', function () {
    const category = 'One Punch';

    test('return array gif', async () => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
});