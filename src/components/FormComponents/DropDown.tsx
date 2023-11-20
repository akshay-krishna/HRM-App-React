import { useState } from "react";
import TextInput from "./TextInput";
import List from "../List/List";

const DropDown = (props: any) => {
  const [toggleDropdown, setToggleDropdown] = useState("");
  const [input, setInput] = useState(props.initialvalue || "");
  // console.log(props.renderarray, ":inside dropdown");
  let name = props.name as string;

  return (
    <div className={`flex-column label-input ${props.name}-parent`}>
      <TextInput
        {...props}
        value={input}
        Value={input}
        readOnly
        onFocus={() => setToggleDropdown(props.name)}
        onBlur={() => setTimeout(() => setToggleDropdown(""), 100)}
      />
      {toggleDropdown === props.name && (
        <List
          dataArray={props.renderarray}
          listName={props.name}
          handleFunction={(data) =>
            setInput(
              name === "role"
                ? data.role
                : name === "department"
                ? data.department
                : data.location
            )
          }
        />
      )}
    </div>
  );
};

export default DropDown;
