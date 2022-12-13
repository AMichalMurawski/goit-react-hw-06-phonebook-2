import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export class ContactItem extends Component {
  handleClick = () => {
    const { id } = this.props.contact;
    this.props.onClick(id);
  };

  render() {
    const { id, name, number } = this.props.contact;
    return (
      <li className={css.item} key={id}>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button
          className={css.button}
          type="button"
          onClick={e => this.handleClick()}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
