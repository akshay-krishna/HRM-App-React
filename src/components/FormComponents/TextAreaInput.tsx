import { useField } from "formik";

function TextAreaInput({ label, ...props }: any) {
  const [field, meta] = useField(props);
  return (
    <div className="flex-column label-input">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="textarea-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextAreaInput;
