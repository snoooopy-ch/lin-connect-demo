import SectionTitle from "../../atoms/section-title";
import LinkButton from "../../molecules/linkbutton";
import Info from "../../molecules/info";
import { InfoItem, InfoListProp, Align } from "../../../models";


const InfoList: React.FC<InfoListProp> = ({infos}:InfoListProp) => {
  return (
    <section className="info">
      <SectionTitle
        title={'Info'}
      />
      {infos.map((info: InfoItem, i: number) => {
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