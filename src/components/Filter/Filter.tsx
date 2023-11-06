import { IskillInterface } from "../../interfaces/IskillInterface";
import FilterIcon from "../Icons/FilterIcon";
import { SearchBySkill } from "./FIlterStyled";
import FilterList from "./FilterList";

const Filter = ({ dataSkills = [] }: { dataSkills: IskillInterface[] }) => {
  return (
    <SearchBySkill>
      <input
        className="filter-search"
        type="text"
        placeholder="Filter By Skills"
        name="skill-add-search"
        formNoValidate
        autoComplete="off"
      />
      <FilterIcon />
      <ul className="skill-list close">
        {dataSkills.map((data) => {
          return <FilterList dataSkills={data} />;
        })}
      </ul>
    </SearchBySkill>
  );
};

export default Filter;
