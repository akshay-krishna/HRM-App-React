import { useState } from "react";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill, SelectedSkills } from "./FIlterStyled";
import CloseIcon from "../Icons/CloseIcon";
import CloseFilterIcon from "../Icons/CloseFilterIcon";
import List from "../List/List";
import { IstringID } from "../../interfaces/CommonInterfaces/IstringID";

const Filter = ({
  selectedValue,
  className,
  dataSkills = [],
}: {
  selectedValue?: string;
  className: string;
  dataSkills: IstringID[];
}) => {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<IstringID[]>([]);

  console.log("skills selectted", selectedSkills);
  const handleSelectSkill = (skill: IstringID) => {
    console.log("before pushing clicked selected skills", skill);
    if (!selectedSkills.includes(skill)) {
      console.log("selected skill is ", skill);
      setSelectedSkills((prev) => [...prev, skill] as IstringID[]);
    }
    console.log("after pushing clicked selected skills", skill);
  };

  const handleRemoveSelectedSkill = (skillName: string) => {
    const updatedList = selectedSkills.filter(
      (selected) => selected.name !== skillName
    );
    setSelectedSkills(updatedList);
  };

  const handleRemoveAllSkill = () => {
    setSelectedSkills([]);
  };

  return (
    <SearchBySkill>
      <input
        className={className}
        type="text"
        placeholder="Filter By Skills"
        name="skills"
        formNoValidate
        autoComplete="off"
        onFocus={() => setShowSkills(true)}
        onBlur={() => setTimeout(() => setShowSkills(false), 100)}
      />
      {!selectedSkills.length ? (
        <FilterIcon />
      ) : (
        <CloseFilterIcon clickCloseFilter={() => handleRemoveAllSkill()} />
      )}
      {showSkills && (
        <List
          position={`${className}-position`}
          dataArray={dataSkills}
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
