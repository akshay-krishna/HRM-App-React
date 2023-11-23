import { useState } from "react";
import List from "../List/List";
import { useField } from "formik";

const DropDown = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const [toggleDropdown, setToggleDropdown] = useState("");
  let name = props.name as string;

  const handleValue = (data: any) => {
    switch (name) {
      case "role":
        return data.role;
      case "department":
        return data.department;
      case "location":
        return data.location;
      default:
        return "";
    }
  };
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
            helpers.setValue(handleValue(data));
          }}
        />
      )}
    </div>
  );
};

export default DropDown;
