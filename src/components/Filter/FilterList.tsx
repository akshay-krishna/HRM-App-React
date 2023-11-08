import { Iskill } from "../../interfaces/CommonInterfaces/Iskill";
import { SkillListStyle } from "./FIlterStyled";

const FilterList = ({dataSkills}:{dataSkills: Iskill}) => {
  return <SkillListStyle>{dataSkills.name}</SkillListStyle>;
};

export default FilterList;
