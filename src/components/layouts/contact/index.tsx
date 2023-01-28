import SectionTitle from "../../atoms/section-title";
import TextArea from "../../molecules/textarea";
import TextField from "../../molecules/textfield";
import Button from "../../molecules/button";
import './style.scss';
import { GlobalColor } from "../../../models";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <form className="contact-form">
        <SectionTitle 
            title='About'
          />
        <div className="contact-row justify-between">
          <div className="contact-row col-6">
            <TextField
              label={'姓'}
              placeholder={'例）太郎'}
              />
          </div>
          <div className="contact-row col-6">
            <TextField
              label={'姓'}
              placeholder={'例）太郎'}
              />
          </div>
        </div>
        <div className="contact-row">
          <TextField
            label={'メールアドレス'}
            placeholder={'例）yamada@email.com'}
            />
        </div>
        <div className="contact-row">
          <TextArea
            label={'お問合せ内容'}
            placeholder={''}
            />
        </div>
        <div className="contact-row">
          <Button 
            text={'送信する'}
            color={GlobalColor.WHITE}
            background={GlobalColor.YELLOW} type={"submit"}
          />
        </div>
      </form>
    </section>
  )
}

export default Contact;