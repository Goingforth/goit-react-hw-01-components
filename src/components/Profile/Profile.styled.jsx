import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  //width: 50%;
  width: 30%;
  height: 100%;

  position: relative;
  left: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  //overflow: auto;

  /* margin-top: 32px;
  margin-bottom: 32px; */

  padding-top: 60px;
  // padding-bottom: 80px;

  // background-color: #dcdcdc;
  border: 2px solid #d3d3d3;
  border-radius: 2%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* padding-top: 32px;
  padding-bottom: 32px; */
  // width: 54%;
  width: 100%;
  background-color: #ffffff;
  // border: 3px solid #d3d3d3;
`;

export const Avatar = styled.img`
  width: 33%;
  border: 1px solid #d3d3d3;
  border-radius: 50%;

  margin-bottom: 32px;
`;

export const StatsData = styled.ul`
  display: flex;
  justify-content: space-between;
  // width: 54%;
  width: 100%;

  background-color: #f5f6f8;
`;

export const StatsDataItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.33%;

  padding-top: 20px;
  padding-bottom: 20px;

  border-top: 1px solid #d3d3d3;

  &:not(:last-child) {
    border-right: 1px solid #d3d3d3;
  }

  text-align: center;
`;

export const TitleStatsDataItem = styled.span`
  margin-bottom: 10px;
`;

export const ValueStatsDataItem = styled.span``;
