import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--primary);
  padding: 0rem 2rem;
`;

export const HeaderStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding: 10px 0;
    cursor: pointer;
  }
`;

export const SearchStyle = styled.div`
  position: relative;
  #search {
    width: 280px;
    height: 60px;
    background-color: var(--light);
    border: none;
    border-radius: 7px;
    padding-left: 10px;
    padding-right: 45px;
    font-size: 14px;
  }

  #search::placeholder {
    color: var(--primary);
    font-weight: 700;
    font-size: 14px;
    opacity: 1;
  }

  .search-icon {
    position: absolute;
    right: 13px;
    top: 14px;
    border: none;
    background-color: var(--light);
    cursor: pointer;
  }
`;
