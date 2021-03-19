import Button from '@material-ui/core/Button';
//types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
};

const Item: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <img src={item.image} alt={item.title}></img>
    <div className='item'>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>{item.price}</h3>
    </div>
    <Button>Add to cart</Button>
  </Wrapper>
);

export default Item;
