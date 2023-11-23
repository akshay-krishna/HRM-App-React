import { useState } from "react";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill, SelectedSkills } from "./FIlterStyled";
import CloseIcon from "../Icons/CloseIcon";
import CloseFilterIcon from "../Icons/CloseFilterIcon";
import List from "../List/List";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { useLocation } from "react-router";
export let selected: IskillID[];

const Filter = ({
  name = "skills",
  selectedValue = [],
  updateSkills,
  className,
  setselSkills,
}: {
  name?: string;
  selectedValue?: IskillID[];
  updateSkills?: (newSkills: IskillID[]) => void;
  className: string;
  setselSkills?: React.Dispatch<React.SetStateAction<IskillID[]>>;
}) => {
  const { updateFilters, removeFilter, skillList } = useEmployeeContext();
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkills, setSelectedSkills] =
    useState<IskillID[]>(selectedValue);
  const [filterSkills, setFilterSkills] = useState(skillList);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  if (location.pathname.split("/")[1] == "edit-page") {
    selected = selected;
  } else {
    selected = [];
  }
  const handleSelectSkill = (skill: IskillID) => {
    const isExist = selectedSkills.some((sk) => sk.skill === skill.skill);
    if (!isExist) {
      setSelectedSkills((prev) => [...prev, skill]);
      updateFilters(skill);
      updateSkills?.([...selectedSkills, skill]);
    }
  };

  const handleRemoveSelectedSkill = (skillName: string) => {
    const updatedList = selectedSkills.filter(
      (selected) => selected.skill !== skillName
    );
    setSelectedSkills(updatedList);
    removeFilter(updatedList);
    updateSkills?.(updatedList);
  };

  const handleRemoveAllSkill = () => {
    setSelectedSkills([]);
    removeFilter([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setFilterSkills(
      filterSkills.filter((indSkill) =>
        indSkill.skill.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  setselSkills?.(selectedSkills);
  return (
    <SearchBySkill>
      <input
        className={className}
        type="text"
        placeholder="Filter By Skills"
        name={name}
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
          listName="skills"
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
