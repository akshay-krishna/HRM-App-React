import styled from "styled-components";

export const LoaderComponentWrapper = styled.div`
  position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
`;
