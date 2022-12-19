import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.handleChange(value);
  };

  render() {
    const { filter } = this.props;
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
          value={filter}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
