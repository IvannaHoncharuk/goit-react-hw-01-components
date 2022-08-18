import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
            <li className="item">
                {stats.map(({id, label, percentage}) =>
                key = {id}
                <span >{label}</span>
                <span >{percentage}%</span>
                )}
            </li>
        </ul>
    </section>;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            parcentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};