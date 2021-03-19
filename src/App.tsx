import { useState } from 'react';
import { useQuery } from 'react-query';
//components
import Item from './Item/Item';
import Message from './Message/Message';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import ChatIcon from '@material-ui/icons/Chat';
//styles
import { Wrapper, StyledButton } from './App.styles';
//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [botOpen, setBotOpen] = useState(false);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Somenthing went wrong.. </div>;
  return (
    <Wrapper>
      <Drawer anchor='right' open={botOpen} onClose={() => setBotOpen(false)}>
        <Message />
      </Drawer>
      <StyledButton onClick={() => setBotOpen(true)}>
        <ChatIcon />
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
