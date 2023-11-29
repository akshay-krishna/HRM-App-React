import styled from "styled-components";

export const SearchBySkill = styled.div`
  position: relative;
  height: 100%;
  .filter-search {
    height: 100%;
    width: 100%;
    border: 1px solid var(--primary);
    padding-left: 10px;
    background-color: var(--light);
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
