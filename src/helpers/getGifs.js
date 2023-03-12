export const getGifs = async (category) => {
    // console.log(import.meta.jest);
    // console.log(process.env);

    let api_key;
    if (import.meta.jest) {
        api_key = process.env.VITE_APIKEY
    } else {
        api_key = import.meta.env.VITE_APIKEY
    }

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img =>  ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}