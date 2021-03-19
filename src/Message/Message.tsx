import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core';

//styles
import { MessageStyle } from './Message.styles';
//types

type MessageType = {};

const Message: React.FC<MessageType> = () => {
  return (
    <MessageStyle>
      <FormControl>
        <InputLabel htmlFor='name'>Name</InputLabel>
        <Input id='name' type='text' />
        <FormHelperText id='name'>Type your name</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input id='email' type='email' />
        <FormHelperText id='email'>Type your email</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='phone'>Phone Number</InputLabel>
        <Input id='phone' type='number' />
        <FormHelperText id='phone'>Type your phone number</FormHelperText>
      </FormControl>
      <Button variant='contained' color='primary'>
        Submit
      </Button>
    </MessageStyle>
  );
};

export default Message;
