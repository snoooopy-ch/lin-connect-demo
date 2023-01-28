import './style.scss';

const TextArea : React.FC<TextAreaProp> = (prop: TextAreaProp) => {
  return (
    <div className="textarea">
      <div className="textarea-label">
        { prop.label }
      </div>
      <textarea className="textarea-input" placeholder={prop.placeholder} rows={10}/>
    </div>
  )
}

export default TextArea;

export interface TextAreaProp {
  label: string;
  placeholder: string;
}