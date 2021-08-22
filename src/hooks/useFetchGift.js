import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifts";




export const useFetchGift = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( ()=> {
        getGifs(category).then( imgs => {
            setState({
                data: imgs,
                loading:false,
            });
        });

    },[]);

    return state;
}

