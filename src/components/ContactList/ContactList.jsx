import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export function ContactList({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
