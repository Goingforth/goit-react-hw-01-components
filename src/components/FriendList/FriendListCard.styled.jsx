import styled from '@emotion/styled';

export const Card = styled.li`
  display: flex;
  align-items: center;
  width: 28%;
  padding: 12px;

  border: 1px solid var(--border-color);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

export const Img = styled.img`
  margin-right: 12px;
  background-color: var(--secondary-text-color);
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Status = styled.span`
  width: 22px;
  height: 22px;

  margin-right: 24px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};

  border-radius: 50%;
`;
