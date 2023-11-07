import styled from "styled-components";

export const SearchBySkill = styled.div`
  position: relative;
  max-width: 238px;
  height: 60px;
  .filter-search {
    height: 100%;
    width: 100%;
    border: 1px solid var(--primary);
    border-radius: 7px;
    padding-left: 10px;
  }

  .skill-list {
    list-style-type: none;
    position: absolute;
    padding-left: 0px;
    top: 43px;
    background-color: var(--light);
    border: 1px solid var(--primary);
    border-radius: 7px;
    width: 165px;
    cursor: pointer;
    z-index: 5;
    overflow: auto;
    max-height: 300px;
  }
`;

export const SkillListStyle = styled.li`
  padding: 20px 5px;
  border-bottom: 1px solid var(--primary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:nth-child(even) {
    background-color: var(--secondary);
  }

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const SelectedSkills = styled.div`
  white-space: nowrap;
  overflow: auto;
  padding: 10px 0 20px;
  gap: 10px;

  .individual-skills {
    gap: 10px;
    align-items: center;
    background-color: var(--light);
    border-radius: 20px;
    border: 1px solid var(--primary);
    padding: 5px;
  }

  .individual-skills:nth-child(even) {
    background-color: var(--secondary);
  }

  .close-icon {
    cursor: pointer;
    transition: 0.5s;
  }

  .close-icon:hover {
    transform: scale(0.8);
  }
`;
