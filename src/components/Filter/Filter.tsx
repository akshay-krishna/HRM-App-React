import { useState } from "react";
import { IskillInterface } from "../../interfaces/IskillInterface";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill, SelectedSkills } from "./FIlterStyled";
import FilterList from "./FilterList";
import CloseIcon from "../Icons/CloseIcon";
import CloseFilterIcon from "../Icons/CloseFilterIcon";

const Filter = ({ dataSkills = [] }: { dataSkills: IskillInterface[] }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<IskillInterface[]>([]);

  const handleSelectSkill = (skill: IskillInterface) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prev) => [...prev, skill] as IskillInterface[]);
    }
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
        className="filter-search"
        type="text"
        placeholder="Filter By Skills"
        name="skill-add-search"
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
        <ul className="skill-list">
          {dataSkills.map((data) => (
            <FilterList
              clickSkill={() => handleSelectSkill(data)}
              key={data.id}
              dataSkills={data}
            />
          ))}
        </ul>
      )}
      <SelectedSkills className="flex-row">
        {selectedSkills.map((individualSkills) => (
          <span className="individual-skills flex-row">
            <p>{individualSkills.name}</p>
            <CloseIcon
              removeSelectedSkills={() =>
                handleRemoveSelectedSkill(individualSkills.name)
              }
            />
          </span>
        ))}
      </SelectedSkills>
    </SearchBySkill>
  );
};

export default Filter;
