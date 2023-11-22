import { useField } from "formik";

function TextInput({ label, ...props }: any) {
  const [field, meta] = useField(props);
  return (
    <div className="flex-column label-input">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {/* {readOnly && Value === "" && meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
        ) : null}
      {!readOnly && meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
