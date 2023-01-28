import SectionTitle from "../../atoms/section-title";
import LinkButton from "../../molecules/linkbutton";
import Info from "../../molecules/info";
import { InfoItem, InfoListProp, Align } from "../../../models";
import './style.scss';

const InfoList: React.FC<InfoListProp> = (infos) => {
  return (
    <section className="info-section">
      <SectionTitle
        title={'Info'}
        align={Align.START}
      />
      {infos.infos.map((info: InfoItem, i: number) => {
        return (
          <Info 
            title={info.title}
            date={info.date}
          />
        )
      })}
      <div className="info-arrow">
        <LinkButton
          title={'View more→'}
          link={'/'}
          align={Align.CENTER}
        />
      </div>
    </section>
  )
}

export default InfoList;