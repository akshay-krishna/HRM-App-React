import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  margin: 80px 0 20px;
  border: 5px solid var(--primary);
  border-collapse: collapse;

  th {
    background-color: var(--primary);
    font-size: 18px;
    color: var(--light);
    padding: 0;
  }

  td {
    font-size: 16px;
    font-weight: 400;
    padding: 0 15px;
  }

  tr {
    border-bottom: 1px solid var(--primary);
    height: 60px;
    transition: 0.6s;
  }

  tbody tr {
    cursor: pointer;
  }

  tr:hover {
    background-color: var(--hover-color);
  }

  tr:nth-child(even) {
    background-color: var(--secondary);
    transition: 0.6s;
  }

  tr:nth-child(even):hover {
    background-color: var(--hover-color);
  }

  .arrow-direction {
    height: 60px;
    align-items: center;
    gap: 5px;
    padding: 0 15px;
    cursor: pointer;
  }
  
  .no-direction {
    padding: 0 15px;
  }

  .no-data {
    text-align: center;
  }
`;
