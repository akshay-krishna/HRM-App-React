import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  background-color: var(--primary);
  font-size: 16px;
  font-weight: 700;
  color: var(--light);
  padding: 1px 4px;
  align-items: center;
  align-self: center;
  border-radius: 7px;
  border: 1px solid var(--primary);
  transition: 0.6s;
  &.primary {
    width: 195px;
    height: 60px;
    gap: 10px;
    padding: 1px 10px;
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

  &.tohover {
    svg {
      fill: red;
    }
    &:hover {
      svg {
        fill: green;
      }
    }
  }
`;
