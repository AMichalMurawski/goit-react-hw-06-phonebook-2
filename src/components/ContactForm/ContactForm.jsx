import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const initialValue = { name: '', number: '' };

export class ContactForm extends Component {
  state = { ...initialValue };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const id = nanoid();
    e.preventDefault();
    const { name, number } = this.state;
    if (!this.props.onSubmit({ id, name, number })) {
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ ...initialValue });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={css.form}
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          gap: 15,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
        }}
      >
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
