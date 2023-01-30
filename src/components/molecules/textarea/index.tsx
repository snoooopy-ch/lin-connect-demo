import './style.scss';

const TextArea : React.FC<TextAreaProp> = (prop: TextAreaProp) => {
  return (
    <div className="textarea">
      <div className="textarea-label">
        { prop.label?? '' }
      </div>
      <textarea 
        className="textarea-input" 
        placeholder={prop.placeholder?? ''} 
        rows={10}
        onChange={prop.onChange?? undefined}>
        { prop.value}
      </textarea>
    </div>
  )
}

export default TextArea;

export interface TextAreaProp {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) =>void;
}