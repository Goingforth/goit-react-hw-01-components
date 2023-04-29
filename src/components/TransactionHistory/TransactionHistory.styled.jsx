import styled from '@emotion/styled';

export const Table = styled.table`
  overflow: hidden;
  border-collapse: collapse;
  background: var(--background-table);
  width: 70%;
  margin: 5% auto 0;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  margin-bottom: 32px;
`;

export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  background: var(--background-header-table);
  color: var(--white);

  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }
  border-collapse: collapse;
`;

export const Td = styled.td`
  padding-top: 12px;
  padding-bottom: 12px;

  border-top: 1px solid var(--border-color);
  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }
  border-collapse: collapse;
  text-align: center;
  justify-content: center;

  color: var(--secondary-text-color);
  font-weight: 500;
`;

export const Tr = styled.tr`
  &:nth-of-type(2n) {
    background: var(--background-ul);
  }
`;
