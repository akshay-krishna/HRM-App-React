import { Iskill } from "../../interfaces/CommonInterfaces/Iskill";
import { SkillListStyle } from "./FIlterStyled";

const FilterList = ({
  dataSkills,
  clickSkill,
}: {
  dataSkills: Iskill;
  clickSkill: () => void;
}) => {
  return (
    <SkillListStyle onClick={clickSkill}>{dataSkills.name}</SkillListStyle>
  );
};

export default FilterList;
