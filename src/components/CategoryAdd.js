import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = ({setCategorias}) => {

    const [value, setValue] = useState('');

    const changeValue = (e) =>
    {
        setValue(e.target.value);
    }

    const submitForm = (e) =>
    {
        e.preventDefault();
        setCategorias(categs => [value,...categs]);
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" value={value} onChange={changeValue}></input>
        </form>
    )
}

CategoryAdd.propTypes =
{
    setCategorias:PropTypes.func.isRequired
}

export default CategoryAdd
