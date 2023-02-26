import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';

import {
  FormSection,
  AddNumberInput,
  Button,
  InputTitle,
  ErrorMes,
} from './Add.styled';

const userSchema = object({
  name: string().required(),
  number: string().required().min(5).max(20),
});

export const AddContact = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        addContact({
          ...values,
          id: nanoid(),
        });
        resetForm();
      }}
      validationSchema={userSchema}
    >
      <FormSection>
        <InputTitle>Name</InputTitle>
        <AddNumberInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMes name="name" component="div" />
        <InputTitle>Number</InputTitle>
        <AddNumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMes name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </FormSection>
    </Formik>
  );
};

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};