import { GlobalColor } from '../../../models'
import number_format from '../../../utils/number_format'
import $sanitize from '../../../utils/sanitize_html';
import Dot from '../../atoms/dot'
import './style.scss';

export interface ItemProp {
  image: string,
  title: string,
  price: number,
}

const Item: React.FC<ItemProp> = ({
  image,
  title,
  price
}) => {
  return (
    <div className="item">
      <img className="item-img" src={image} />
      <div className="dots">
        <Dot 
          size={12}
          color={GlobalColor.WHITE}
        />
        <Dot 
          size={12}
          color={GlobalColor.LIGHTGRAY}
        />
        <Dot 
          size={12}
          color={GlobalColor.DARKGRAY}
        />
        <Dot 
          size={12}
          color={GlobalColor.YELLOW}
        />
        <Dot 
          size={12}
          color={GlobalColor.LIGHTBLUE}
        />
      </div>
      <p className="item-title">{ $sanitize(title) }</p>
      <p className="item-price">{ number_format(price) }</p>
    </div>
  )
}

export default Item;