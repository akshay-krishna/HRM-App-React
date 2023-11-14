import { useState } from "react";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill, SelectedSkills } from "./FIlterStyled";
import CloseIcon from "../Icons/CloseIcon";
import CloseFilterIcon from "../Icons/CloseFilterIcon";
import List from "../List/List";
import { IstringID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEmployeeContext } from "../../context/EmployeeContext";

const Filter = ({
  selectedValue = [],
  className,
  dataSkills = [],
}: {
  selectedValue?: IstringID[];
  className: string;
  dataSkills: IstringID[];
}) => {
  const [showSkills, setShowSkills] = useState(false);
  const [skillList, setSkillList] = useState(dataSkills);
  const [selectedSkills, setSelectedSkills] =
    useState<IstringID[]>(selectedValue);
  const { updateFilters, removeFilter } = useEmployeeContext();
  const [inputValue, setInputValue] = useState("");

  const handleSelectSkill = (skill: IstringID) => {
    const isExist = selectedSkills.some((sk) => sk.id === skill.id);
    if (!isExist) {
      setSelectedSkills((prev) => [...prev, skill]);
      updateFilters(skill);
    }
  };

  const handleRemoveSelectedSkill = (skillName: string) => {
    const updatedList = selectedSkills.filter(
      (selected) => selected.name !== skillName
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

    setSkillList(
      dataSkills.filter((indSkill) =>
        indSkill.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
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
            setSkillList(dataSkills);
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
              <p>{individualSkills.name}</p>
              <CloseIcon
                removeSelectedSkills={() =>
                  handleRemoveSelectedSkill(individualSkills.name)
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
