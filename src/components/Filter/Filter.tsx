import { useState } from "react";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill, SelectedSkills } from "./FIlterStyled";
import CloseIcon from "../Icons/CloseIcon";
import CloseFilterIcon from "../Icons/CloseFilterIcon";
import List from "../List/List";
import {
  IskillID,
  // IstringID,
} from "../../interfaces/CommonInterfaces/IstringID";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { useLocation } from "react-router";
export let selected: IskillID[];

const Filter = ({
  selectedValue = [],
  className,
}: // dataSkills = [],
{
  selectedValue?: IskillID[];
  className: string;
  // dataSkills: IstringID[];
}) => {
  const [showSkills, setShowSkills] = useState(false);
  // const [skillList, setSkillList] = useState(dataSkills);
  const [selectedSkills, setSelectedSkills] =
    useState<IskillID[]>(selectedValue);
  const { updateFilters, removeFilter, skillList /*setSkillList*/ } =
    useEmployeeContext();

  // if (skillList.length == 0) {
  //   return <div>Loading...</div>;
  // }
  const [filterSkills, setFilterSkills] = useState(skillList);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  if (location.pathname.split("/")[1] == "edit-page") {
    selected = selected;
  } else {
    selected = selectedSkills;
  }
  // console.log("selected skiils:", selectedSkills);
  const handleSelectSkill = (skill: IskillID) => {
    const isExist = selectedSkills.some((sk) => sk.skill === skill.skill);
    if (!isExist) {
      setSelectedSkills((prev) => [...prev, skill]);
      updateFilters(skill);
    }
  };

  const handleRemoveSelectedSkill = (skillName: string) => {
    const updatedList = selectedSkills.filter(
      (selected) => selected.skill !== skillName
    );
    setSelectedSkills(updatedList);
    // console.log("removed", updatedList);
    removeFilter(updatedList);
  };

  const handleRemoveAllSkill = () => {
    setSelectedSkills([]);
    removeFilter([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
    setFilterSkills(
      filterSkills.filter((indSkill) =>
        indSkill.skill.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  // console.log(skillList);
  // console.log(filterSkills);
  return (
    <SearchBySkill>
      <input
        className={className}
        type="text"
        placeholder="Filter By Skills"
        name="skills"
        value={inputValue}
        formNoValidate
        autoComplete="off"
        onFocus={() => setShowSkills(true)}
        onBlur={() => {
          setTimeout(() => {
            setShowSkills(false);
            setFilterSkills(filterSkills);
          }, 100);
          setInputValue("");
        }}
        onChange={handleChange}
      />
      {!selectedSkills.length ? (
        <FilterIcon />
      ) : (
        <CloseFilterIcon clickCloseFilter={() => handleRemoveAllSkill()} />
      )}
      {showSkills && (
        <List
          position={`${className}-position`}
          dataArray={skillList}
          handleFunction={handleSelectSkill}
        />
      )}
      <SelectedSkills className="flex-row">
        {selectedSkills.map((individualSkills) => {
          return (
            <span
              key={individualSkills.id}
              className="individual-skills flex-row"
            >
              <p>{individualSkills.skill}</p>
              <CloseIcon
                removeSelectedSkills={() =>
                  handleRemoveSelectedSkill(individualSkills.skill)
                }
              />
            </span>
          );
        })}
      </SelectedSkills>
    </SearchBySkill>
  );
};

export default Filter;
