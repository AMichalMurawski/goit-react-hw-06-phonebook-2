import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactItem } from './ContactItem/ContactItem';

const LOCAL_STORAGE_CONTACTS = 'phonebookContacts';

export function App() {
  const [contacts, setContacts] = useState(getContactsFromLocalStorage);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CONTACTS, JSON.stringify(contacts));
  });

  function getContactsFromLocalStorage() {
    try {
      const localContacts = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_CONTACTS)
      );
      return localContacts;
    } catch {
      return [];
    }
  }

  function handleSubmit(contact) {
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
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_CONTACTS, JSON.stringify(newContacts));
  }

  function deleteContact(id) {
    const index = contacts.findIndex(contact => contact.id === id);
    contacts.splice(index, 1);
    setContacts([...contacts]);
  }

  function filterContacts() {
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
    return contactList;
  }

  const contactList=filterContacts()

  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        width: '60%',
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
      <ContactForm onSubmit={values => handleSubmit(values)} />
      <h2
        style={{
          fontWeight: 700,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Contacts{' '}
      </h2>
      <Filter filter={filter} handleChange={value => setFilter(value)} />
      {contactList && <ContactList>
        {contactList.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onClick={id => deleteContact(id)}
          />
        ))}
      </ContactList>}
    </div>
  );
}
