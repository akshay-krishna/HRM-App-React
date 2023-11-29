import styled from "styled-components";

export const PaginationWrapper = styled.div`
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  .mirror {
    transform: rotate(180deg);
  }
  .pagenumber {
    height: 100%;
    width: 55px;
    border: 1px solid var(--primary);
    border-radius: 7px;
    text-align: center;
  }
  .pagination-input {
    gap: 15px;
  }
  .page-text {
    align-self: center;
  }
`;
