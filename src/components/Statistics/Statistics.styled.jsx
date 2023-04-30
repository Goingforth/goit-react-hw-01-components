import styled from '@emotion/styled';
import { getRandomColor } from './getRandomColor';

export const Section = styled.section`
  position: relative;
  left: 25%;
  width: 40%;

  margin-top: 32px;
  margin-bottom: 32px;

  background-color: var(--white);
  color: var(--secondary-text-color);

  border-radius: 5px;
`;

export const Title = styled.h2`
  padding-top: 32px;
  padding-bottom: 32px;

  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;

  color: var(--white);
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  width: 20%;
  text-align: center;
  justify-content: center;

  padding-top: 12px;
  padding-bottom: 12px;

  background-color: ${getRandomColor()};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
