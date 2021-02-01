import {useState,useEffect} from "react";
 import { search } from '../helpers/GetGifs';

export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState(
        {
            data:[],
            loading:true
        }
    );
    
    useEffect(() => {
        search(categoria).then(imgs=>
        {

                setstate({
                    data:imgs,
                    loading:false
                });

        })
    }, [categoria])

    
        
    

    return state;

}
