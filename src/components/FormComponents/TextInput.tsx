import { useField } from "formik";

function TextInput({ label, ...props }: any) {
  const [field, meta] = useField(props);
  const value = field.value !== null ? field.value : "";
  return (
    <div className="flex-column label-input">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} value={value} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
