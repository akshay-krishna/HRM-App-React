import { IskillInterface } from "../../interfaces/IskillInterface";
import { SkillListStyle } from "./FIlterStyled";

const FilterList = ({dataSkills}:{dataSkills: IskillInterface}) => {
  return <SkillListStyle>{dataSkills.name}</SkillListStyle>;
};

export default FilterList;
