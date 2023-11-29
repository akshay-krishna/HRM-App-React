import { useState } from "react";
import List from "../List/List";
import { useField } from "formik";
import { handleValue } from "../../utils/handleValue";

const DropDown = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const [toggleDropdown, setToggleDropdown] = useState("");
  let name = props.name as string;

  return (
    <div className={`flex-column label-input ${props.name}-parent`}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="text-input"
        {...field}
        {...props}
        onFocus={() => setToggleDropdown(props.name)}
        onBlur={() => setTimeout(() => setToggleDropdown(""), 100)}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {toggleDropdown === props.name && (
        <List
          dataArray={props.renderarray}
          listName={props.name}
          handleFunction={(data) => {
            helpers.setValue(handleValue(data, name));
          }}
        />
      )}
    </div>
  );
};

export default DropDown;
