import $sanitize from '../../../utils/sanitize_html';
import './style.scss';

export interface InfoItem {
  title: string,
  date: string,
}

const Info: React.FC<InfoItem> = ({title, date}) => {
  return (
    <div className="info-item">
      <div className="info-item-title">{ $sanitize(title) }</div>
      <div className="info-item-date">{ $sanitize(date) }</div>
      <img className="info-item-arrow" src={'/assets/images/arrow.svg'} />
    </div>
  )
}

export default Info;