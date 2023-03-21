import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Button, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <p>
        Welcome,<Text> {user.name}</Text>
      </p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
