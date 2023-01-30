import './style.scss';

const TextField : React.FC<TextFieldProp> = (prop: TextFieldProp) => {
  return (
    <div className="textfield">
      <div className="textfield-label">
        { prop.label?? '' }
      </div>
      <input 
        value={prop.value}
        type="text" 
        className="textfield-input" 
        placeholder={prop.placeholder?? ''} 
        onChange={prop.onChange?? undefined }
      />
    </div>
  )
}

export default TextField;

export interface TextFieldProp {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) =>void;
}