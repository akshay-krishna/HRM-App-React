import { IskillInterface } from "../../interfaces/IskillInterface";
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
      <ul className="skill-list">
        {dataSkills.map((data) => {
          return <FilterList dataSkills={data} />;
        })}
      </ul>
    </SearchBySkill>
  );
};

export default Filter;
