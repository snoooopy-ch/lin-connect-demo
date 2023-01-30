import SectionTitle from "../../atoms/section-title";
import LinkButton from "../../molecules/linkbutton";
import Info from "../../molecules/info";
import { InfoItem, InfoListProp, Align } from "../../../models";
import './style.scss';

const InfoList: React.FC<InfoListProp> = (infos) => {
  return (
    <section className="info-section">
      <div className="info-section-container">
        <div className="info-section-title">
          <SectionTitle
            title={'Info'}
          />
        </div>
        
        {infos.infos.map((info: InfoItem, i: number) => {
          return (
            <Info 
              title={info.title}
              date={info.date}
            />
          )
        })}
        <div className="info-arrow info-section-linkbtn">
          <LinkButton
            title={'View more→'}
            link={'/'}
          />
        </div>
      </div>
    </section>
  )
}

export default InfoList;