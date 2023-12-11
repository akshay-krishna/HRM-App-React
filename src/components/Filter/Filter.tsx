import { useEffect, useState } from "react";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill, SelectedSkills } from "./FIlterStyled";
import CloseIcon from "../Icons/CloseIcon";
import CloseFilterIcon from "../Icons/CloseFilterIcon";
import List from "../List/List";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { setFilters } from "../../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IemployeeContext } from "../../interfaces/CommonInterfaces/IemployeeContext";

const Filter = ({
  name = "skills",
  selectedValue = [],
  className,
  setselSkills,
  dispatchSelected,
}: {
  name?: string;
  selectedValue?: IskillID[];
  className: string;
  setselSkills?: React.Dispatch<React.SetStateAction<IskillID[]>>;
  dispatchSelected?: (f: IskillID[]) => void;
}) => {
  const state = useSelector((state: IemployeeContext) => state);
  const dispatch = useDispatch<Dispatch>();

  const [filterSkills, setFilterSkills] = useState<IskillID[]>(state.skillList);
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkills, setSelectedSkills] =
    useState<IskillID[]>(selectedValue);
  let inputValue;

  useEffect(() => {
    setselSkills?.(selectedSkills);
  }, [selectedSkills, setselSkills]);

  useEffect(() => {
    setFilterSkills(state.skillList);
  }, [state.skillList]);

  const handleSelectSkill = (skill: IskillID) => {
    const isExist = selectedSkills.some((sk) => sk.skill === skill.skill);
    if (!isExist) {
      setSelectedSkills((prev) => {
        const updatedSkills = [...prev, skill];
        dispatch(setFilters([...state.filters, skill]));
        dispatchSelected?.(updatedSkills);
        return updatedSkills;
      });
    }
  };

  const handleRemoveSelectedSkill = (skillName: string) => {
    const updatedList = selectedSkills.filter(
      (selected) => selected.skill !== skillName
    );
    setSelectedSkills(updatedList);
    dispatch(setFilters([...state.filters, updatedList]));
    dispatchSelected?.(updatedList);
  };

  const handleRemoveAllSkill = () => {
    setSelectedSkills([]);
    dispatch(setFilters([]));
    dispatchSelected?.([]);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    let temp = state.skillList;
    if (inputValue !== "") {
      temp = temp.filter((indSkill) =>
        indSkill.skill.toLowerCase().includes(inputValue)
      );
    }
    setFilterSkills([...temp]);
  };

  return (
    <SearchBySkill>
      <input
        className={className}
        type="text"
        placeholder="Search By Skills"
        name={name}
        value={inputValue}
        formNoValidate
        autoComplete="off"
        onFocus={() => setShowSkills(true)}
        onBlur={(e) => {
          setTimeout(() => {
            setShowSkills(false);
            setFilterSkills(state.skillList);
          }, 100);
          e.target.value = "";
        }}
        onInput={handleInput}
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
          dataArray={filterSkills}
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
