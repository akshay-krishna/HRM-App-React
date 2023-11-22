import { useState } from "react";
import List from "../List/List";
import { useField } from "formik";
// import { setFieldValue } from "formik";

const DropDown = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);

  const [toggleDropdown, setToggleDropdown] = useState("");
  // const [input, setInput] = useState(props.initialvalue || "");
  // console.log(props.renderarray, ":inside dropdown");
  let name = props.name as string;
  // console.log(field, "field");
  // console.log(props.renderarray);
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
            helpers.setValue(
              name === "role"
                ? data.role
                : name === "department"
                ? data.department
                : data.location
            );
          }}
        />
      )}
    </div>
  );
};

export default DropDown;
