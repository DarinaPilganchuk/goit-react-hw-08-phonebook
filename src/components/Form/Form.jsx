// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Button, FormStyle, Input, InputName, TitleInput } from './Form.styled';
import { addContact } from 'redux/contacts/operation';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const ListContacts = {
      name: form.name.value,
      number: form.number.value,
      id: nanoid(),
    };

    dispatch(addContact(ListContacts));
    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <TitleInput>
        Name
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Min Yoongi"
        />
      </TitleInput>
      <TitleInput>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+38(0хх)-ххх-хх-хх"
        />
      </TitleInput>
      <Button type="submit">Add contact</Button>
    </FormStyle>
  );
};
