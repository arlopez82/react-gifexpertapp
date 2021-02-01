import React, {useState} from 'react';
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>
{

    const [categorias, setCategorias] = useState(['Naruto']);

    // const agregarCategoria = ()=>
    // {
    //     setCategorias([...categorias,'Supercampeones']);
    //     // setCategorias(categs => [...categs,'Supercampeones'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <CategoryAdd setCategorias={setCategorias}/>

            <hr/>

            <ol>
                {
                    categorias.map(categoria=>
                        {
                            // return <li key={categoria}>{categoria}</li>
                            return <GifGrid categoria={categoria} key={categoria}>{categoria}</GifGrid>
                        })
                }
            </ol>

            {/* <button onClick={agregarCategoria}>Agregar</button> */}
        </>
    )
}

export default GifExpertApp;