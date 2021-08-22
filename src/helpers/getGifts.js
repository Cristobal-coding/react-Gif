const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=b5CZOqdeAIv6HKAYg263v1iJVSYXbKVw`;
    const resp = await fetch(url);
    const { data  } = await resp.json();

    const gifs = data.map( img => {
        return {
            url : img.images?.downsized_medium.url,
            id : img.id,
            title : img.title,
        }
    });
    return gifs;

}

export default getGifs;