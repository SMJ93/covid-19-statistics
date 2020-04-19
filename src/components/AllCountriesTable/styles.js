import styled from 'styled-components';

export const TableContainer = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    @media (max-width: 630px) {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 15px;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .link-container {
    width: 100px;
    @media (min-width: 800px) {
      width: 200px;
    }
  }
`;
