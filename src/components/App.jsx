import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactItem } from './ContactItem/ContactItem';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        value =>
          value.name.toLowerCase().replace(/\s/g, '') ===
          contact.name.toLowerCase().replace(/\s/g, '')
      )
    ) {
      alert(`${contact.name} is already in contacts.`);
      return true;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = value => {
    this.setState(prevState => ({
      filter: value,
    }));
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const index = contacts.findIndex(contact => contact.id === id);
    contacts.splice(index, 1);
    this.setState(prevState => ({
      contacts,
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    let contactList = [];
    if (filter.length > 0) {
      contactList = contacts.filter((contact, index, array) => {
        return contact.name
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(filter.toLowerCase().replace(/\s/g, ''));
      });
    } else {
      contactList = contacts;
    }

    return (
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          width: '50%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          Phonebook
        </h2>
        <ContactForm onSubmit={values => this.handleSubmit(values)} />
        <h2
          style={{
            fontWeight: 700,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          Contacts{' '}
        </h2>
        <Filter
          filter={filter}
          handleChange={value => this.changeFilter(value)}
        />
        <ContactList>
          {contactList.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onClick={id => this.deleteContact(id)}
            />
          ))}
        </ContactList>
      </div>
    );
  }
}
