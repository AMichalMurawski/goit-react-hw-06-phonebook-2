import React, { useState, useEffect } from 'react';
import { filterChange } from 'redux/filterSlice';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(filterChange(e.currentTarget.value))
  }

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => handleChange(e)}
      />
    </label>
  );
}
