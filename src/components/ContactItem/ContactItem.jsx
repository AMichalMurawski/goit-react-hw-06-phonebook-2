import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <>
      <p className={css.contact}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={handleClick}
      >
        Delete
      </button>
    </>
  );
}


ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};