import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  width: 30%;
  height: 100%;

  position: relative;
  left: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  margin-top: 32px;
  padding-top: 60px;
  border: 2px solid var(--border-color);
  border-radius: 2%;

  background-color: var(--white);

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Avatar = styled.img`
  width: 33%;
  border: 1px solid var(--border-color);
  border-radius: 50%;

  margin-bottom: 32px;
`;

export const StatsData = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  background-color: var(--background-ul);
`;

export const StatsDataItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.33%;

  padding-top: 20px;
  padding-bottom: 20px;

  border-top: 1px solid var(--border-color);

  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }

  text-align: center;
`;

export const TitleStatsDataItem = styled.span`
  margin-bottom: 10px;
  color: var(--secondary-text-color);
`;

export const ValueStatsDataItem = styled.span`
  font-weight: 700;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Tag = styled.p`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 400;
  color: var(--secondary-text-color);
`;

export const Location = styled.p`
  margin-bottom: 28px;
  font-size: 18px;
  color: var(--secondary-text-color);
`;
