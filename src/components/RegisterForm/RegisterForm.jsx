import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Button,
  FormStyle,
  Input,
  InputEmail,
  TitleInput,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
      <TitleInput>
        Name
        <Input type="text" name="name" />
      </TitleInput>
      <TitleInput>
        Email
        <InputEmail type="email" name="email" />
      </TitleInput>
      <TitleInput>
        Password
        <Input type="password" name="password" />
      </TitleInput>
      <Button type="submit">Sign Up</Button>
    </FormStyle>
  );
};
