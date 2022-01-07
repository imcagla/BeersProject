import React, {useContext} from 'react'
import {CheckboxSliderContext} from '../context/CheckboxSliderContext'

function Checkbox(props) {
    
    const {isChecked, setIsChecked, setSrmValue} = useContext(CheckboxSliderContext)

    return (
        <div className='col-2'>
            <input class="form-check-input border border-warning" type="checkbox" value="" id="flexCheckDefault" 
            onClick={() => {
                setIsChecked(!isChecked)
                setSrmValue(0)}} ></input>
            <label className='ms-3 text-light' htmlFor="">{props.name}</label>
        </div>
    )
}

export default Checkbox