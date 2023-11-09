import { useState } from "react";
import TextInput from "./TextInput";
import List from "../List/List";

const DropDown = (props: any) => {
  const [toggleDropdown, setToggleDropdown] = useState("");
  const [input,setInput] = useState("")

  return (
    <div className={`flex-column label-input ${props.name}-parent`}>
      <TextInput
        {...props}
        value={input}
        readOnly
        onFocus={() => setToggleDropdown(props.name)}
        onBlur={() => setTimeout(() => setToggleDropdown(""), 100)}
      />
      {toggleDropdown === props.name && <List dataArray={props.renderArray} handleFunction={(data) => setInput(data.name) }/>}
    </div>
  );
};

export default DropDown;
