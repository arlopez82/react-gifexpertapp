export const search = async(categoria)=>
    {
        const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(categoria)}&api_key=NjKj3dD0UTaJXVaz4fLspkylZCuHkPMy&limit=10`;
        const respu = await fetch(url);
        const {data} = await respu.json();

        const gifs = data.map(a=>
            {
                return {
                    id:a.id,
                    title:a.title,
                    url:a.images.downsized_medium.url
                }
            });

            return gifs;

    }