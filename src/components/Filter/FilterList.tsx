import { IskillInterface } from "../../interfaces/IskillInterface";
import { SkillListStyle } from "./FIlterStyled";

const FilterList = ({
  dataSkills,
  clickSkill,
}: {
  dataSkills: IskillInterface;
  clickSkill: () => void;
}) => {
  return (
    <SkillListStyle onClick={clickSkill}>
      {dataSkills.name}
    </SkillListStyle>
  );
};

export default FilterList;
