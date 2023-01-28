import './style.scss';

const TextField : React.FC<TextFieldProp> = (prop: TextFieldProp) => {
  return (
    <div className="textfield">
      <div className="textfield-label">
        { prop.label }
      </div>
      <input type="text" className="textfield-input" placeholder={prop.placeholder} />
    </div>
  )
}

export default TextField;

export interface TextFieldProp {
  label: string;
  placeholder: string;
}