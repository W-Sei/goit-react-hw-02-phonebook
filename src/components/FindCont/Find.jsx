import React from 'react';
import PropTypes from 'prop-types';
import { ContactsInput, LabelTitle, NameInputWrapper } from './Find.styled';
export const FilterContact = ({ filter }) => {
  return (
    <NameInputWrapper>
      <LabelTitle>Find contacts by name</LabelTitle>
      <ContactsInput type="text" onChange={filter} />
    </NameInputWrapper>
  );
};

FilterContact.propTypes = {
  filter: PropTypes.func.isRequired,
};
