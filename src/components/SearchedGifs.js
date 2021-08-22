import React, { Fragment, useState } from 'react'
import { GiftItem } from './GiftItem';
import { useFetchGift } from '../hooks/useFetchGift';


export const SearchedGifs = ( {category} ) => {
    const [images, setImages] = useState([]);

    const { loading, data:imgs } = useFetchGift(category);

    return (
        <Fragment>
            <h5 className="text-light"> { category }</h5>
            <div className="d-flex flex-wrap p-0 w-100 justify-content-center text-center">
                {
                    loading && (
                        <>
                        <small className="text-primary my-1 animate__animated animate__flash">Buscando... </small>
                        <div className="spinner-border text-primary mx-1" role="status" aria-hidden="true"></div>
                        </>
                    )
                }
                {
                    imgs.map(img => {
                        return <GiftItem  key={img.id} {...img}  />;
                    })
                }
            </div>
            
        </Fragment>
    )
}
