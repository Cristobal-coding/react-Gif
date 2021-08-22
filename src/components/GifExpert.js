import React, { Fragment, useState } from 'react'
import { AddCategory } from './AddCategory';
import { SearchedGifs } from './SearchedGifs';
const GifExpert = () => {

    const [categorias, setCategorias] = useState(['HunterXHunter','Dragon Ball',]);
    return (
        <Fragment>
            <h2 className="text-primary">GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr></hr>
            <div className="row mx-0">
                <div className="col-12 px-0">
                {
                    categorias.map( cat => <SearchedGifs key={ cat } category={ cat } /> )
                }
                </div>
            </div>
            
        </Fragment>
    )
}

export default GifExpert
