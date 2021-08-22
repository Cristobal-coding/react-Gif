import React, {useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategorias } ) => {

    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
       setValue( e.target.value );
    };

    const handleOnSubmit= (e) => {
        e.preventDefault();
        setCategorias( cats => [ value, ...cats,]);
        setValue('');
    };

    return (
        <form onSubmit= {handleOnSubmit}>
            <h5 className="text-light">Añadir Categoría:</h5>
            <input type="text" onChange={ handleInputChange } value={value} className="form-control" placeholder="Escribe una nueva categoria" />
        </form>
    )
}
AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired,
}