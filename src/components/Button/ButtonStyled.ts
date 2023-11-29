import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: var(--light);
  padding: 1px 4px;
  align-items: center;
  align-self: center;
  border-radius: 7px;
  transition: 0.6s;
  &.primary {
    width: 195px;
    height: 60px;
    gap: 10px;
    background-color: var(--primary);
    padding: 1px 10px;
    border: 1px solid var(--primary);
    cursor: pointer;
    &:hover {
      background-color: var(--light);
      color: var(--primary);
      border: 1px solid var(--primary);
      svg {
        fill: var(--primary);
      }
    }
  }
  &.add-edit-btn {
    margin-top: 30px;
    width: 215px;
  }
  &.secondary {
    width: 195px;
    height: 60px;
    gap: 10px;
    border: 1px solid var(--red);
    background-color: var(--red);
    padding: 1px 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--light);
      color: var(--red);
      border: 1px solid var(--red);
      svg {
        fill: var(--primary);
      }
    }
  }
  &.delete-btns {
    width: 110px;
    height: 45px;
  }
  &.pagination-btn {
    border: 1px solid var(--primary);
    padding: 4px;
    cursor: pointer;
  }
  &.back-home {
    align-self: flex-start;
    width: 175px;
  }
`;
