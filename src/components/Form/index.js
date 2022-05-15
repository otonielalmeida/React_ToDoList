import React from "react";
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Form.css';

export default function Form(props) {
  return(
    <form onSubmit={props.handleSubmit} action='#' className='form'>
          <input onChange={props.handleChange}
            type="text"
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
  )
}
