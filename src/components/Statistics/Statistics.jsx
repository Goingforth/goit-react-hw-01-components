import PropTypes from 'prop-types';
export default function Statistics({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{}</h2>

      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
