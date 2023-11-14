import styled from "styled-components";

export const ViewDetailsSection = styled.section`
  width: 1000px;
  margin: 40px auto ;
  background-color: var(--light);
  box-shadow: 0px 0px 41px -4px var(--primary);
  min-height: 600px;

  .left-bar {
    background-color: var(--primary);
    color: var(--light);
    font-size: 16px;
    font-weight: 700;
    padding: 70px 20px 20px;
    align-items: center;
    gap: 50px;
    min-height: 600px;
    width: 20%;
    box-sizing: border-box;
  }

  .profile-photo-circle {
    display: inline-block;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: clip;
    background-color: var(--light);
  }

  .profile-photo-circle .profile-photo-view {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .right-bar {
    padding: 20px;
    width: 75%;
    box-sizing: border-box;
  }

  .personal-details {
    justify-content: center;
    gap: 50px;
    width: 50%;
  }

  .name-display {
    font-size: 24px;
    font-weight: 700;
  }

  .role-display {
    font-size: 20px;
    font-weight: 500;
  }

  .address-display {
    border: none;
    resize: none;
    padding: 0;
    overflow-x: auto;
    height: 70px;
  }

  .address-display-container {
    box-sizing: border-box;
  }

  .skill-details {
    justify-content: center;
    width: 50%;
    gap: 10px;
  }

  #skills textarea {
    resize: none;
  }

  .show-skills {
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid var(--primary);
    background-color: var(--secondary);
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
  }
`;
