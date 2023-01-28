import { InfoItem } from '../../../models';
import './style.scss';

const Info: React.FC<InfoItem> = ({title, date}) => {
  return (
    <div className="info-item">
      <div className="info-item-title">{ title }</div>
      <div className="info-item-date">{ date }</div>
      <img className="info-item-arrow" src={'/assets/images/arrow.svg'} />
    </div>
  )
}

export default Info;