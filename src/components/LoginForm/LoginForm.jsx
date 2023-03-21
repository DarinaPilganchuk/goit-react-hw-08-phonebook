import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  FormStyle,
  Input,
  InputEmail,
  TitleInput,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
      <TitleInput>
        Email
        <InputEmail type="email" name="email" />
      </TitleInput>
      <TitleInput>
        Password
        <Input type="password" name="password" />
      </TitleInput>
      <Button type="submit">Log in</Button>
    </FormStyle>
  );
};
