import styled from "styled-components";

export const ListStyledUl = styled.ul`
  list-style-type: none;
  position: absolute;
  padding-left: 0px;
  top: 72px;
  background-color: var(--light);
  border: 1px solid var(--primary);
  border-radius: 7px;
  width: 165px;
  cursor: pointer;
  z-index: 5;
  overflow: auto;
  max-height: 300px;

  &.skill-dashboard {
    top: 43px;
  }

  &.skill-input-list {
    top: 33px;
  }
`;

export const ListStyleLi = styled.li`
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
