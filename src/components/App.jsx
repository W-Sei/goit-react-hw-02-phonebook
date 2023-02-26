import React, { Component } from 'react';
import { GlobalStyle } from 'GlobalStyles.styled';
import { AddContact } from './AddCont/Add';
import { FilterContact } from './FindCont/Find';
import { RenderContact } from './RenderCont/Render';

import Notiflix from 'notiflix';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { TitleContact, TitleMain } from './Title/Title.styled';
import { ContactsWrapper } from './Wrapper/ContactsWrapper.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  findName = evt => {
    const findName = evt.target.value;
    this.setState({ filter: findName.toLowerCase() });

    let nameFound;
    nameFound === findName ? this.setState({ filter: findName.toLowerCase() }) : Notiflix.Notify.info(`No such contact in the list`);
  };

  addContact = newContact => {
    let isPresent;
    this.state.contacts.map(
      contact => (isPresent = contact.name === newContact.name)
    );

    if (isPresent === false) {
      Notiflix.Notify.info(`${newContact.name} is already in your contacts`);
      return;
    } else
      this.setState(prevState => {
        prevState.contacts.push(newContact);
        return { contacts: [...prevState.contacts] };
      });
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
