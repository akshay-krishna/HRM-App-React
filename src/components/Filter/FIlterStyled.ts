import styled from "styled-components";

export const SearchBySkill = styled.div`
  position: relative;
  max-width: 238px;
  height: 60px;
  .filter-search {
    height: 100%;
    width: 94%;
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
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  cursor: pointer;

  &:nth-child(even) {
    background-color: var(--secondary);
  }

  &:hover {
    background-color: var(--hover-color);
  }
`;
