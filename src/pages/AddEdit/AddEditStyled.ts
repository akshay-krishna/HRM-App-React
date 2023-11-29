import styled from "styled-components";

export const AddEditSection = styled.section`
  width: 1200px;
  margin: 40px auto;
  background-color: var(--light);
  border-radius: 7px;
  box-shadow: 0px 0px 41px -4px var(--primary);
  padding: 20px 0;

  .add-edit-employee-head {
    align-items: center;
  }

  .add-edit-profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
    padding: 10px;
    overflow: inherit;
  }

  .imageloaded {
    border-radius: 50%;
    cursor: pointer;
    padding: 10px;
    overflow: inherit;
  }

  .details {
    justify-content: space-around;
    margin: 40px 0;
  }

  .field-space {
    gap: 50px;
  }

  input {
    height: 50px;
    border: 1px solid var(--primary);
    width: 300px;
    padding-left: 10px;
  }

  textarea {
    border: 1px solid var(--primary);
    width: 300px;
    padding: 14px 2px 15px 10px;
    resize: none;
    height: 50px;
  }

  .label-input {
    gap: 20px;
  }

  .department-parent,
  .role-parent,
  .location-parent {
    position: relative;
  }

  .skill-input {
    max-width: 300px;
    max-height: 50px;
  }
`;
