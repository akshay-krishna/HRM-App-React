import styled from "styled-components";

export const DeleteModalWrapper = styled.section`
  max-width: 380px;
  height: 380px;
  margin: 0 auto;
  margin-bottom: 100px;
  align-items: center;
  text-align: center;
  border: 5px solid var(--red);
  justify-content: space-around;
  padding: 0 10px;
  /* z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: var(--white);
  /* min-height: 600px; */
  overflow: auto;
  border-radius: 7px;
  .confirm-modal-btns {
    gap: 80px;
  }
`;
