import React, { useState,useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({categoria}) => {

    // const [imagenes,setImagenes] = useState([]);

    // useEffect(()=>
    // {
    //     search(categoria).then(imgs =>
    //         {
    //             setImagenes(imgs);
    //         });
    // },[categoria])

    const {data:images,loading} = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>

            {loading && <p>Cargando</p>}

            <div className='animate__animated animate__fadeIn animate__delay-2s'>
                {
                    images.map(a => {
                        return <GridGifItem key={a.id} img={a}></GridGifItem> 
                    })
                }
            </div>

        </>
    )
}
