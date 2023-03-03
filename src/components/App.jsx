import React, { Component } from 'react';
import { GlobalStyle } from 'GlobalStyles.styled';
import { AddContact } from './AddCont/Add';
import { FilterContact } from './FindCont/Find';
import { RenderContact } from './RenderCont/Render';

import Notiflix from 'notiflix';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { TitleContact, TitleMain } from './Title/Title.styled';
import { ContactsWrapper } from './Wrapper/ContactsWrapper.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  findName = evt => {
    this.setState({ filter: evt.target.value.toLowerCase() });
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let contactExists = this.state.contacts.findIndex(
      contact => contact.name === name
    );
 
    if (contactExists >= 0) {
      Notiflix.Notify.info(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contactsFilter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Wrapper>
        <GlobalStyle />
        <TitleMain>Phonebook</TitleMain>
        <AddContact addContact={this.addContact} />
        {this.state.contacts.length > 0 && (
          <ContactsWrapper>
            <TitleContact>Contacts:</TitleContact>
            <FilterContact filter={this.findName} />
            <RenderContact
              contacts={contactsFilter}
              deleteContact={this.deleteContact}
            />
          </ContactsWrapper>
        )}
      </Wrapper>
    );
  }
}
