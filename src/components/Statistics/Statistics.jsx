import PropTypes from 'prop-types';
//import { getRandomColor } from './getRandomColor';
import {
  Section,
  StatList,
  Item,
  Title,
  Percentage,
  Label,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title.toUpperCase()}</Title>}
      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
